import React, { useEffect } from "react";
import {
	Outer,
	LeftSpaceWrapper,
	LogInBoxContainer,
	TextBoxPara,
	Inner,
	ButtonContainer,
	FormContainer,
	SignInLinkContainer,
	DashBoardOuter,
	DashboardCol1,
	DashboardCol2,
	DashboardCol3,
	Col3Cell1,
	Col1Row1,
	Col1Row2,
	Col1Row1Cell1,
	Col1Row1Cell2,
	Col1Row3,
	GlowButton,
	GlowBtnWrapper,
} from "./styles";
import {
	WhiteFlexCard,
	BaseButton,
	ScoreCard,
	QAsPerDay,
	GameProgress,
	UserAvatar,
} from "../../components";
import { AuthConditionalRender } from "../../hoc";
import { SignUpForm } from "../../forms";
import { NavLink } from "react-router-dom";
import { StoreState } from "../../reducers";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentGameRound } from "../../actions";
import { ICON_LVL_1 } from "../../static";
export const FrontPage = () => {
	const state = useSelector((state: StoreState) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCurrentGameRound());
	}, []);

	return (
		<Outer>
			{/* Space to the Left of the screen */}
			<AuthConditionalRender>
				{(WhenIsAuth, WhenNotAuth) => (
					<React.Fragment>
						{/* When user is Authenticated */}
						<WhenIsAuth>
							<DashBoardOuter>
								<DashboardCol1>
									{" "}
									<Col1Row1>
										<Col1Row1Cell1>
											<UserAvatar src={ICON_LVL_1} />
										</Col1Row1Cell1>
										<Col1Row1Cell2>
											<span>Lvl 3 dúx</span>
											<span className="bold username">
												Njallskarp123
											</span>
										</Col1Row1Cell2>
									</Col1Row1>
									<Col1Row2>
										<div className="advance-info">
											<span>8/10</span>
											<span>
												<i className="fas fa-chevron-right" />
												<i className="fas fa-chevron-right" />
												Lvl 4 Kennari
											</span>
										</div>
										<GameProgress />
									</Col1Row2>
									<Col1Row3>
										<h1>Næsta verkefni</h1>
										<p>
											Þér hefur tekist að gera foo og
											bar, en getur þú gert foobar?
											Það eru þúsundir schpoinkels
											valsandi um miðbæinn, getur þú
											stoppað þau?
										</p>
										<GlowBtnWrapper>
											<GlowButton>Spila</GlowButton>
										</GlowBtnWrapper>
									</Col1Row3>
								</DashboardCol1>
								<DashboardCol2>
									<ScoreCard />
								</DashboardCol2>
								<DashboardCol3>
									{" "}
									<Col3Cell1>
										<QAsPerDay />
									</Col3Cell1>
								</DashboardCol3>
							</DashBoardOuter>
						</WhenIsAuth>

						{/* When user is not authenticated */}
						<WhenNotAuth>
							<Inner>
								<LeftSpaceWrapper>
									<h1>Spurðu mig spurninga!</h1>
									<TextBoxPara>
										Flest höfum við gaman af
										spurningjaleikjum. Hér getur þú
										aflað þér allskyns þekkingar og um
										leið styrkt íslensku í nútímanum.
										Þær spurningar og svör sem verða
										til á þessari síðu nýtast síðan til
										þess að þjálfa gervigreind sem mun
										læra að svara hinum ýmsu
										spurningum, ekki aðeins þeim sem
										hér birtast.
									</TextBoxPara>
									<TextBoxPara>
										Afurð þessara verkefnis mun því
										ekki einungis læra svörin við þínum
										spurningum, heldur um leið læra að
										svara spurningum sem það hefur
										aldrei séð áður
									</TextBoxPara>
									<TextBoxPara>
										Hálpaðu okkur að koma íslensku inn
										í nútímann, markmiðið er að safna{" "}
										<i>100.000 spurningum</i> árið 2021
									</TextBoxPara>
									<ButtonContainer>
										<NavLink to="/spila">
											<BaseButton
												label="Áfram"
												onClick={() => null}
												type="success"
											/>
										</NavLink>
									</ButtonContainer>
								</LeftSpaceWrapper>
								<LogInBoxContainer>
									<WhiteFlexCard>
										<FormContainer>
											<SignUpForm />
											<SignInLinkContainer>
												<NavLink to="/innskra">
													Ég er með aðgang
												</NavLink>
											</SignInLinkContainer>
										</FormContainer>
									</WhiteFlexCard>
								</LogInBoxContainer>
							</Inner>
						</WhenNotAuth>
					</React.Fragment>
				)}
			</AuthConditionalRender>
		</Outer>
	);
};
