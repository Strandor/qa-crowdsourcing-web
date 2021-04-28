import React from "react";
import { IProps } from "./interface";
import { Outer, Dot } from "./styles";

const PageDots = ({ current, total }: IProps) => {
	return (
		<Outer>
			{[...new Array(total)].map((_, i) => (
				<Dot completed={i < current} />
			))}
		</Outer>
	);
};

export default PageDots;
