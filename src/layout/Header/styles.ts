import styled from "styled-components";
import { ICON_LVL_1 } from "../../static/icons";
import { Colors } from "../../styles";

export const Outer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	box-sizing: border-box;
	padding: 30px 0;
	margin-bottom: 100px;
	@media only screen and (max-width: 1300px) {
		margin-bottom: 20px;
	}
`;

export const HeaderItemContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	.header-profile-itm {
		color: ${Colors.FG_WHITE} !important;
		font-weight: 700;
		font-size: 15px;
		padding: 3px 20px 3px 14px;
		background-color: ${Colors.DANGER};
		transform: translateX(-78%);
		position: absolute;
		left: 0;
		top: 60%;
		z-index: -1;
		:nth-child(2) {
			color: ${Colors.FG_WHITE} !important;
			font-weight: 700;
			font-size: 15px;
			padding: 3px 20px 3px 14px;
			background-color: ${Colors.DANGER};
			transform: translateX(-90%);
			position: absolute;
			left: 0;
			top: 20%;
			z-index: -1;
		}
	}
`;

export const HeaderItem = styled.div`
	padding: 0 20px 0 0;
`;

export const UserIconWrapper = styled.div`
	height: 82px;
	width: 82px;

	position: relative;
	/* Start the shake animation and make the animation last for 0.5 seconds */
`;

export const Badge = styled.div`
	position: absolute;
	background-color: ${Colors.HIGHLIGHT};
	height: 27px;
	width: 27px;
	border-radius: 50%;
	bottom: -5px;
	right: -2px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
`;
