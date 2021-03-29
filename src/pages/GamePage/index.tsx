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

	if (state.current === undefined) return <FlexLoader size={150} />;
	return (
		<RestrictedPage userTypes={["guest"]} fallbackUrl="/innskra">
			<GameProgress />
			<WriteQuestionGame />
			<SubmitArticleGame />
			<VerifyAnswerLocationGame />
			<QuestionQualityAssuranceGame />
			<VerifyAnswerSpanGame />
			<RoundCompletedGame />
		</RestrictedPage>
	);
};
