import React from "react";
import { Outer, HeaderItem, PlayButton, HeaderItemContainer } from "./styles";
import { headerItems } from "./utils";
import { NavLink } from "react-router-dom";

export default () => {
	return (
		<Outer>
			<HeaderItemContainer>
				{headerItems.map((item) => (
					<HeaderItem className="header-itm">{item.text}</HeaderItem>
				))}
			</HeaderItemContainer>
			<NavLink to="/spila">
				<PlayButton>Spila</PlayButton>
			</NavLink>
		</Outer>
	);
};
