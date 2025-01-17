import React, {
	FormEvent,
	useEffect,
	useRef,
	useState,
	useMemo,
	useCallback,
} from "react";
import { GoogleTextInput, ModalWithTitle, Atoms } from "../../../../";
import { GOOGLE_LOGO } from "../../../../../static";
import * as Styles from "./styles";
import ArticlePreview from "./ArticlePreview";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../../../reducers";
import { GameWrapper } from "../../../../../hoc";
import { GameTypes } from "../../../../../declerations";
import PreviewReader from "./PreviewReader";
import {
	fetchArticlesQuery,
	writeArticleSearchQuery,
	markQuestionAsImpossible,
	selectParagraphToPreview,
	submitArticleAndParagraph,
} from "../../../../../actions";
import { QuestionIs, TaskInfoBox } from "../../GameUtils";
import { Explain, TutorialItemClickEvent } from "../../../Tutorial";
import * as TUTORIAL from "./tutorialItems";
import axios, { CancelTokenSource } from "axios";

/**
 * This round does not have an disconnected counterpart as
 * the need for one has not risen
 */
export const GoogleSearch = () => {
	const [showContinueModal, setContinueModal] = useState(false);
	const cancelToken = useRef<CancelTokenSource>();

	const state = useSelector((state: StoreState) => state);
	const dispatch = useDispatch();
	const firstArticleRef = useRef<null | HTMLDivElement>(null);

	const {
		submitArticle: {
			previewArticle,
			query,
			articles,
			text,
			_id: questionId,
			searchError,
			noResults,
			isPerformingSearch,
			previewParagraphIndex,
		},
		game: { _id: gameRoundId },
		auth: { _id: userId },
	} = state;

	// is true if we should show article in preview viewer
	const hasPreview = !!previewArticle;

	// scroll to first article when loaded
	useEffect(() => {
		if (articles.length > 0)
			firstArticleRef.current?.scrollIntoView({
				block: "end",
				behavior: "smooth",
			});
	}, [articles.length]);

	// handles the submission
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		cancelToken.current = axios.CancelToken.source();

		e.preventDefault();
		dispatch(fetchArticlesQuery(cancelToken.current));
	};

	/**
	 * Call back that takes care of removing
	 * tutorial that has to be closed and marking it so it is not
	 * opened again
	 */
	const CACHEKEY = `${userId}-NEVER:SHOW:PERSISTANT:TUTORIAL`;

	const showCloseResultTutorial = localStorage.getItem(CACHEKEY) === null;

	const handleCloseResultTutorial = (e: TutorialItemClickEvent) => {
		localStorage.setItem(CACHEKEY, "1");
		e.markAsFinished();
		e.removeItem();
	};

	// gets the tutorial that explains google results
	const persistantSearchResultTutorial = useMemo(
		() =>
			showCloseResultTutorial
				? TUTORIAL.markasNotAnswerableClosure(
						() => setContinueModal(true),
						handleCloseResultTutorial
				  )
				: [],
		[questionId]
	);

	const handleCancelFetchArticles = () => {
		cancelToken.current?.cancel();
	};

	// box which user can use to continue to next task
	const PointUserToContinue = () => (
		<React.Fragment>
			{!showCloseResultTutorial && !hasPreview ? (
				<Styles.ContinueBox hideDetails={false} onClick={() => setContinueModal(true)}>
					<h3>Finnur þú ekki svarið?</h3>
					<p>
						Það gerist að öðru hverju að svar finnst ekki í leitinni. Ef þú lendir í því
						þá getur þú haldið áfram í næsta verkefni og við merkjum spurninguna sem
						erfiða / ósvaranlega.
					</p>
					Halda áfram í næsta verkefni
					<i className="fas fa-chevron-right" />
				</Styles.ContinueBox>
			) : null}
		</React.Fragment>
	);

	// handles clearing previewed paragraph
	const handleClearParagraphSelection = () =>
		dispatch(selectParagraphToPreview(undefined));

	// handles marking question as unanswerable
	const handleMarkAsImpossible = useCallback(
		() => dispatch(markQuestionAsImpossible(gameRoundId, questionId)),
		[gameRoundId, questionId]
	);

	// handles submitting preview article as the answer to question
	const handleSubmitParagraph = useCallback(
		() =>
			dispatch(
				submitArticleAndParagraph(
					gameRoundId,
					previewArticle?.source.identifier ?? "",
					previewArticle?.key ?? "",
					questionId,
					previewParagraphIndex ?? -1
				)
			),
		[
			gameRoundId,
			previewArticle?.key,
			previewArticle?.source.identifier,
			questionId,
			previewParagraphIndex,
		]
	);

	return (
		<GameWrapper type={GameTypes.submitArticle}>
			{/*
			
			This is the modal that is shown to user
				when he wants to continue, this is 
			done as a failsafe so he can back out of
			marking the question as unanswerable 
			
			*/}
			<ModalWithTitle
				onClose={() => setContinueModal(false)}
				buttons={[
					{
						label: "Nei",
						type: "highlight",
						onClick: () => setContinueModal(false),
					},
					{
						label: "Já",
						type: "highlight",
						onClick: handleMarkAsImpossible,
					},
				]}
				title={"Viltu halda áfram?"}
				open={showContinueModal}
			>
				Það er algengt að svar finnist ekki við spurningu. Ef þú heldur áfram þá merkjum
				við spurninguna sem erfiða eða ósvaranlega.
			</ModalWithTitle>

			{/* ARTICLE PREVIEW READER AND 
			MODAL TO VERIFY SELECTION STARTS HERE
		
			the preview reader is the result of the expression if
			no preview paragraph has been selected. If one has been
			selected then the modal is shown instead. */}
			{previewParagraphIndex === undefined ? (
				<PreviewReader />
			) : (
				<ModalWithTitle
					open={true}
					onClose={handleClearParagraphSelection}
					buttons={[
						{
							label: "Nei",
							type: "danger",
							onClick: handleClearParagraphSelection,
						},
						{
							label: "Já",
							type: "highlight",
							onClick: handleSubmitParagraph,
						},
					]}
					title="Er svarið hér?"
				>
					<p>
						Spurningin er „{text}“. Þú smelltir á eftirfarandi efnisgrein. Ertu viss um
						að svarið sé hér að finna?
					</p>
					<Styles.Para>
						„ {previewArticle?.paragraphs[previewParagraphIndex ?? 0] ?? "VILLA"}“
					</Styles.Para>
				</ModalWithTitle>
			)}
			{/* 			
			END OF MODALS 

			START OF TASK
			Here below the search box and the 
			search results are displayed */}
			<TaskInfoBox title="FINNA SVAR Á VEFNUM">
				<Styles.Paragraph>
					<QuestionIs question={text} />.
				</Styles.Paragraph>

				{/* START OF GOOGLE SEARCH INPUT FORM */}
				<Styles.SearchForm onSubmit={handleSubmit}>
					<Explain items={TUTORIAL.explainGoogle}>
						<img src={GOOGLE_LOGO} alt="myndmerki google" />
						<GoogleTextInput
							value={query}
							onChange={(text) => dispatch(writeArticleSearchQuery(text))}
						/>
						<input type="submit" value="Google leit" />
					</Explain>
				</Styles.SearchForm>
				{
					// END OF GOOGLE SEARCH INPUT FORM

					// START OF RESULTS SEGMENT ON SCREEN
					//
					// Loading, result cards and alerts
					// CASE 1: we are performing search, show loade
					isPerformingSearch ? (
						<Styles.LoaderWrap>
							<span className="clickable" onClick={handleCancelFetchArticles}>
								<i className="fas fa-times" />
								Hætta við leit
							</span>
							<Atoms.Loaders.Flex size={40} />
						</Styles.LoaderWrap>
					) : // CASE 2: there is a search error, show error message
					searchError ? (
						<Explain
							priority="clear-others"
							items={[]}
							persist={persistantSearchResultTutorial}
						>
							<PointUserToContinue />
							<Atoms.Alerts.Ribbon
								label="Það kom um villa við leitina, prufaðu annan leitarstreng"
								type="danger"
							/>
						</Explain>
					) : // CASE 3: We have results, map them to JSX
					articles.length > 0 ? (
						<Explain
							priority="clear-others"
							items={TUTORIAL.explainResults}
							persist={persistantSearchResultTutorial}
						>
							<PointUserToContinue />
							{articles.map((item, i) => (
								<ArticlePreview {...item} key={item.key} _key={item.key} />
							))}
						</Explain>
					) : // CASE 4: NO results, show warning ribbon
					noResults ? (
						<Atoms.Alerts.Ribbon
							label="Það fundust engar niðurstöður hjá Google. Prufaðu annan leitarstreng"
							type="warning"
						/>
					) : // CASE -1: should not happen
					null
				}
			</TaskInfoBox>
			{/* END OF TASK */}
		</GameWrapper>
	);
};
