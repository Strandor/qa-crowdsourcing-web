import { AuthState } from "./interface";
import { Actions, ActionTypes } from "../../actions";

export const initialState: AuthState = {
	username: "",
	email: "",
	type: "loading",
	_id: "",
	scoreCard: {
		questions: 0,
		answers: 0,
		answerVerifications: 0,
		questionVerifications: 0,
		articles: 0,
	},
};

const reducer = (
	state: AuthState = initialState,
	action: Actions
): AuthState => {
	switch (action.type) {
		case ActionTypes.logOutUser:
			return { ...initialState, type: "guest" };
		case ActionTypes.fetchUserFromToken:
			return action.payload;
		case ActionTypes.registerUser:
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
export * from "./interface";
