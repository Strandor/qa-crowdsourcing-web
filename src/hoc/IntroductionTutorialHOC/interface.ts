export interface IProps {
	children: React.ReactNode;
}

export type RoutineKeys =
	| "guide"
	| "questions"
	| "answers"
	| "search"
	| "prizes";

export interface IRoutine {
	label: string;
	key: RoutineKeys;
	steps: IRoutineStep[];
}

export interface IRoutineStep {
	label: string;
	description: string;
	Component: JSX.Element;
}
