import styled from "styled-components";
import { Colors } from "../../../../../styles";

export const Outer = styled.div`
	width: 100%;
	height: 350px;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0px 0px 20px rgba(${Colors.HIGHLIGHT_RGB}, 0.15);
`;

export const LoadingContainer = styled.div`
	height: 50px;
	width: 50px;
	margin-right: 20px;
`;

export const LoadingItems = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

export const NextTaskInner = styled.div`
	width: 600px;
	margin: 0 auto;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 10px 0 20px 0;
	box-sizing: border-box;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
	align-items: flex-end;
`;
