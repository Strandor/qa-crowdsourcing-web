import styled from "styled-components";
import { Colors } from "../../../styles";

export const Outer = styled.div`
	background-color: #fff;
	min-width: 500px;
	padding: 15px;
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(${(Colors.HIGHLIGHT_RGB, 0.2)});
	min-height: 500px;
	display: flex;
	flex-direction: column;
	p,
	h1 {
		width: 450px;
		text-align: center;
		margin: 0 auto;
	}
	h1 {
		margin-bottom: 10px !important;
	}
`;

export const Content = styled.div`
	flex: 1;
	flex-direction: column;
	display: flex;
`;

export const Bottom = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-end;
`;

export const DotsContainer = styled.div`
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	position: absolute;
	display: flex;
`;
