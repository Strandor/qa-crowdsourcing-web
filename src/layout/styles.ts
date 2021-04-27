import styled from "styled-components";
import { Colors } from "../styles";

export const Outer = styled.div`
	max-width: 1200px;
	width: 90%;
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const LoadingOuter = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const FlexCenter = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const AuthCodeOuter = styled.div`
	width: 400px;
	button {
		margin-top: 10px;
	}
	i {
		font-size: 13px;
		animation: 2s spin infinite;
	}
	.hov {
		cursor: pointer;
		transition: 0.3s;
	}
	.hov:hover {
		color: ${Colors.HIGHLIGHT};
	}
`;

export const AuthCodeInner = styled.div`
	margin: 25px 0;
`;
