import React, { useEffect } from "react";
import { RestrictedPage } from "../../hoc";
import {
	WriteQuestionGame,
	GameProgress,
	SubmitArticleGame,
	VerifyAnswerLocationGame,
	QuestionQualityAssuranceGame,
	FlexLoader,
	VerifyAnswerSpanGame,
	RoundCompletedGame,
	GameAnnouncer,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentGameRound, fetchScoreCard } from "../../actions";
import { StoreState } from "../../reducers";

export const GamePage = () => {
	const dispatch = useDispatch();
	const state = useSelector((state: StoreState) => state.game);
	useEffect(() => {
		dispatch(fetchCurrentGameRound());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchScoreCard());
	}, [state.currentRound]);

	return (
		<RestrictedPage userTypes={["guest"]} fallbackUrl="/innskra">
			<GameAnnouncer>
				{state.current === undefined ? (
					<FlexLoader size={150} />
				) : (
					<React.Fragment>
						<GameProgress />
						<WriteQuestionGame />
						<SubmitArticleGame />
						<VerifyAnswerLocationGame />
						<QuestionQualityAssuranceGame />
						<VerifyAnswerSpanGame />
						<RoundCompletedGame />
					</React.Fragment>
				)}
			</GameAnnouncer>
		</RestrictedPage>
	);
};
