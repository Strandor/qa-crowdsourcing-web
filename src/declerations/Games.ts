export enum GameTypes {
	writeQuestion,
	answerQualityAssurance,
	submitArticle,
	verifyAnswerLocation,
	questionQualityAssurance,
	verifyAnswerSpan,
}

export interface MakeQuestionRoundFromAPI {
	_id: string;
	currentRound: number;
	totalRounds: number;
	taskInfo: {
		ideaWords: string[];
		type: "make-question";
		questionType: string;
	};
}

export interface VerifyQuestionRoundFromAPI {
	_id: string;
	currentRound: number;
	totalRounds: number;
	taskInfo: {
		_id: string;
		text: string;
		type: "verify-question";
	};
}

export interface FindArticleRoundFromAPI {
	_id: string;
	currentRound: number;
	totalRounds: number;
	taskInfo: {
		_id: string;
		text: string;
		type: "find-article";
	};
}
export interface LocateSpanRoundFromAPI {
	_id: string;
	currentRound: number;
	totalRounds: number;
	taskInfo: {
		type: "locate-span";
		key: string;
		identifier: string;
		paragraphIndex: number;
		questionId: string;
	};
}
export interface VerifySpanRoundFromAPI {
	_id: string;
	currentRound: number;
	totalRounds: number;
	taskInfo: {
		_id: string;
		text: string;
		type: "verify-span";
		paragraph: string;
		firstWord: number;
		lastWord: number;
	};
}

export type TaskFromBackend =
	| MakeQuestionRoundFromAPI
	| VerifyQuestionRoundFromAPI
	| FindArticleRoundFromAPI
	| LocateSpanRoundFromAPI
	| VerifySpanRoundFromAPI;

export interface ArticlePreview {
	source: Source;
	snippet: string;
	_id: string;
	title: string;
	key: string;
}

interface Source {
	logo: string;
	name: string;
	baseUrl: string;
	identifier: string;
}

export interface Article {
	key: string;
	snippet: string;
	source: Source;
	title: string;
	url: string;
	paragraphs: string[];
}

export interface LoadingGame {}
