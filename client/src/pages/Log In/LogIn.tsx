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
import { useMutation } from '@apollo/react-hooks';
import { saveToken, getToken } from '../../localStorage';
import { pageTransition } from '../Sign Up/SignUp';

const LoginPage: React.FC<any> = (props) => {
    const [loginDetails, setLoginDetails] = useState({
        username: "",
        password: ""
    });

    const [login, { data }] = useMutation(gql`
        mutation Login($username: String!, $password: String!) {
            login(data: { username: $username, password: $password }) {
                accessToken
            }
        }
    `);

    const handleChange = (e: any) => {
        setLoginDetails({
            ...loginDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const { data } = await login({ 
            variables: { username: loginDetails.username, password: loginDetails.password } 
        });
        if (data && data.login) {
            saveToken(data.login.accessToken);
        }
        // Redirect user to dashboard page
        props.history.push('/dashboard');
    };

    // TODO: Create Guest profile
    const handleLoginGuest = async (e: any) => {
        e.preventDefault();
        const { data } = await login({
            variables: { username: "Guest", password: "p@ssword1" }
        });
        if (data && data.login) {
            saveToken(data.login.accessToken);
        }
        // Redirect user to dashboard page
        props.history.push('/dashboard');
    }

    return(
        <LoginPageDiv
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
        >
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
                    <Input value={loginDetails.username} name="username" type="text" onChange={handleChange}/>
                    <Label>Password:</Label>
                    <Input value={loginDetails.password} name="password" type="password" onChange={handleChange}/>
                    </div>
                    <LoginButton color="success" onClick={handleSubmit}>Log In</LoginButton>
                    <div style={{position: "relative", top: "10px"}}>
                        <Paragraph>Just want to checkout how things work? Log in as a guest</Paragraph>
                    </div>
                    <LoginButton color="cadetGrey" onClick={handleLoginGuest}>Log In as Guest</LoginButton>
                </CenteredDiv>
            </MainContentDiv>
            <BackgroundAsideDiv />
        </LoginPageDiv>
    )
};

export default LoginPage;