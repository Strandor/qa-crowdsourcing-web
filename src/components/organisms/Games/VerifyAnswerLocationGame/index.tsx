import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BaseButton } from "../../..";
import {
	clearIndexRangeInParagraph,
	selectFirstWordIndexInParagraph,
	selectSecondWordIndexInParagraph,
} from "../../../../actions";
import { GameTypes } from "../../../../declerations";
import { GameWrapper } from "../../../../hoc";
import { StoreState } from "../../../../reducers";
import { SpanSelector } from "../GameUtils";
import { ButtonContainer } from "./styles";

export const VerifyAnswerLocationGame = () => {
	const state = useSelector(
		(state: StoreState) => state.verifyAnswerLocation
	);

	const dispatch = useDispatch();

	const canUserProceed = !(
		state.firstWord === undefined || state.lastWord === undefined
	);

	return (
		<GameWrapper type={GameTypes.verifyAnswerLocation}>
			<SpanSelector
				{...state}
				onClearRange={(word) =>
					dispatch(clearIndexRangeInParagraph(word))
				}
				onFirstWordChange={(index) =>
					dispatch(selectFirstWordIndexInParagraph(index))
				}
				onLastWordChange={(index) =>
					dispatch(selectSecondWordIndexInParagraph(index))
				}
			/>
			<ButtonContainer>
				<BaseButton
					label="Svarið er ekki í þessari efnisgrein"
					type="danger"
					onClick={() => null}
				/>
				<BaseButton
					label="Staðfesta svar"
					type="highlight"
					onClick={() => null}
					isInactive={!canUserProceed}
				/>
			</ButtonContainer>
		</GameWrapper>
	);
};
