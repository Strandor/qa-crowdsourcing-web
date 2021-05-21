import React, { useEffect } from "react";
import { GlobalStyle } from "../styles";
import { IProps } from "./interface";
import Header from "./Header";
import Footer from "./Footer";
import { LoadingOuter, Outer, TutorialGuidePlacement } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../reducers";
import { fetchCurrentGameRound, fetchUserFromToken } from "../actions";
import { FETCH_USER_FROM_TOKEN_WAIT_MS } from "./utils";
import { Atoms, TutorialGuide, Organisms } from "../components";
import { fetchAnswersPerDay } from "../actions/chartDataActions";

export const LayoutWrapper = ({ children }: IProps) => {
	const { type, _id, hasCompletedTutorial } = useSelector(
		(state: StoreState) => state.auth
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAnswersPerDay());
		if (type === "loading") {
			const t = setTimeout(
				() => dispatch(fetchUserFromToken()),
				FETCH_USER_FROM_TOKEN_WAIT_MS
			);
			return () => {
				clearTimeout(t);
			};
		}
	}, [dispatch, type]);

	useEffect(() => {
		dispatch(fetchCurrentGameRound());
	}, [_id, dispatch]);

	if (type === "loading")
		return (
			<LoadingOuter>
				<GlobalStyle />
				<Atoms.Loaders.Flex size={150} />
			</LoadingOuter>
		);

	/**
	 * TODO: make that work with tutorial
	 * TODO: make that work with mobile (no content)
	 */
	return (
		<React.Fragment>
			<Organisms.Intro />
			<Outer>
				<GlobalStyle />
				<Header />
				{children}
				<Footer />
				{hasCompletedTutorial ? (
					<TutorialGuidePlacement>
						<TutorialGuide />
					</TutorialGuidePlacement>
				) : null}
			</Outer>
		</React.Fragment>
	);
};

export { default as BlurBackground } from "./BackgroundBlur";
