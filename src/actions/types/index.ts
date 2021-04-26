import * as AuthActions from "../authActions";
import * as SubmitArticleActions from "../submitArticleActions";
import * as WriteQuestionActions from "../writeQuestionActions";
import * as GameActions from "../gameActions";
import * as VerifyAnswerLocationsActions from "../verifyAnswerLocationActions";
import * as ChartDataActions from "../chartDataActions";
import * as TutorialActions from "../tutorialActions";

export enum ActionTypes {
	fetchUserFromToken,
	logOutUser,
	registerUser,
	writeQuestion,
	previewArticleToSubmit,
	closePreviewArticleToSubmit,
	selectParagraphInArticle,
	selectFirstWordIndexInParagraph,
	selectSecondWordIndexInParagraph,
	clearIndexRangeInParagraph,
	fetchMakeQuestion,
	fetchVerifyQuestion,
	setCurrentGameRound,
	findArticle,
	writeArticleSearchQuery,
	fetchArticlesQuery,
	locateSpanInParagraph,
	verifySpanInAnswer,
	completeRound,
	fetchScoreCard,
	fetchAnswersPerDay,
	setGameLoadingState,
	setShowAvatarInHeader,
	queueTutorialItems,
	removeTutorialItemIDs,
	replaceFirstInQueue,
	replaceQueue,
	setTutorialItemToFront,
	addPersistantTutorialItems,
	setGoogleSearchError,
	setIsPerformingSearch,
}

export type Actions =
	| AuthActions.FetchUserFromTokenAction
	| AuthActions.LogOutUserAction
	| AuthActions.RegisterUserAction
	| AuthActions.FetchScoreCardAction
	| WriteQuestionActions.WriteQuestionAction
	| SubmitArticleActions.PreviewArticleToSubmitAction
	| SubmitArticleActions.ClosePreviewArticleToSubmitAction
	| SubmitArticleActions.SelectParagraphInArticleAction
	| SubmitArticleActions.WriteArticleSearchQueryAction
	| SubmitArticleActions.FetchArticlesQueryAction
	| SubmitArticleActions.SetGoogleSearchErrorAction
	| SubmitArticleActions.SetIsPerformingSearch
	| VerifyAnswerLocationsActions.SelectFirstWordIndexInParagraphAction
	| VerifyAnswerLocationsActions.SelectSecondWordIndexInParagraphAction
	| VerifyAnswerLocationsActions.ClearIndexRangeInParagraph
	| GameActions.FetchQuestionRoundFromAPIAction
	| GameActions.VerifyQuestionRoundFromAPIAction
	| GameActions.SetCurrentGameRoundAction
	| GameActions.FindArticleRoundFromAPIAction
	| GameActions.LocateSpanRoundFromAPIAction
	| GameActions.VerifySpanRoundFromAPIAction
	| GameActions.CompleteRoundFromAPIAction
	| GameActions.SetGameLoadingStateAction
	| GameActions.SetShowAvatarInHeaderAction
	| ChartDataActions.FetchAnswersPerDayAction
	| TutorialActions.QueueTutorialItemsAction
	| TutorialActions.ReplaceFirstInQueueAction
	| TutorialActions.ReplaceQueueAction
	| TutorialActions.SetTutorialItemsToFrontAction
	| TutorialActions.AddPersistantTutorialItems
	| TutorialActions.RemoveTutorialItemIDsAction;
