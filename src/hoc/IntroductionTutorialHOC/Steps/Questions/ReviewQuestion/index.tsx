import React, { useEffect, useState, useCallback } from "react";
import { Game, ModalWithTitle } from "../../../../../components";
import { SoubRoutineProps } from "../../../interface";

export const ReviewQuestion = ({
	onHideButton,
	onShowButton,
}: SoubRoutineProps) => {
	// use the same type as in the connected version
	// for user familiarity
	type Keys = Game.Connected.QAquestionItems;
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		onHideButton();
	}, []);

	const handleComplete = (isGood: boolean) => {
		if (isGood) onShowButton();
		else setShowModal(true);
	};

	return (
		<div>
			<ModalWithTitle
				title="Ertu viss"
				open={showModal}
				buttons={[
					{
						label: "Ég skil",
						type: "highlight",
						onClick: () => setShowModal(false),
					},
				]}
				onClose={undefined}
			>
				Þessi spurning ætti að upfylla allar kröfur
			</ModalWithTitle>
			<Game.Disconnected.QuestionReview<Keys>
				onComplete={handleComplete}
				question="Hver er höfuðborg Aþenu?"
				// spread the same props as in the
				// connected version for user familiarity
				{...Game.Connected.CheckList}
			/>
		</div>
	);
};
