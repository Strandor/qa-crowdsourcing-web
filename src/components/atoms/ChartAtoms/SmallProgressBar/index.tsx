import React, { useState, useEffect } from "react";
import { Outer, Bar, InfoOuter, Label, BarOuter } from "./styles";
import { IProps } from "./interface";

export const SmallProgressBar = ({
	ratio: size,
	color,
	label,
	amount,
}: IProps) => {
	const [ratio, setRatio] = useState(0);

	useEffect(() => {
		setRatio(size);
	}, []);

	return (
		<Outer>
			<InfoOuter>
				<Label>{label}</Label>
				<Label>{amount}</Label>
			</InfoOuter>
			<BarOuter>
				<Bar theme={{ ratio, color }} />
			</BarOuter>
		</Outer>
	);
};