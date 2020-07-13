import React, { useState } from 'react';
import { LoginPageDiv, 
         MainContentDiv, 
         Paragraph, 
         Label, Input, 
         Header, 
         CenteredDiv, 
         BackgroundAsideDiv 
        } from './Login.styles';
import { LoginButton } from '../../ui/Buttons/Login Button/LoginButton';
import { StyledLink } from '../../ui/Link/Link.styles';
import gql from 'graphql-tag';

const loginMutation = gql`
    mutation($username: String!, $password: String!) {
        login(data: {username: $username, password: $passwrod}) {
            accessToken
        }
    }
`;

const LoginPage: React.FC<any> = (props) => {
    const [state, setState] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e: any) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    return(
        <>
            <LoginPageDiv>
                <MainContentDiv>
                    <CenteredDiv>
                        <Header>Login</Header>
                        <div style={{position: "relative", bottom: "30px"}}>
                            <Paragraph>Don't have an account? <StyledLink to="/signup">Create an Account</StyledLink></Paragraph>
                        </div>
                        <div style={{height: "150px", 
                                    position: "relative",
                                    bottom: "20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between"}}>
                        <Label>Username:</Label>
                        <Input value={state.username} name="username" type="text" onChange={handleChange}/>
                        <Label>Password:</Label>
                        <Input value={state.password} name="password" type="password" onChange={handleChange}/>
                        </div>
                        <LoginButton color="success">Log In</LoginButton>
                        <div style={{position: "relative", top: "10px"}}>
                            <Paragraph>Just want to checkout how things work? Log in as a guest</Paragraph>
                        </div>
                        <LoginButton color="cadetGrey">Log In as Guest</LoginButton>
                    </CenteredDiv>
                </MainContentDiv>
                <BackgroundAsideDiv />
            </LoginPageDiv>
        </>
    )
};

export default LoginPage;