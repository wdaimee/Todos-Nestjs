import React, { useState } from 'react';
import { LoginPageDiv, 
         MainContentDiv, 
         Paragraph, 
         Label, Input, 
         Header, 
         CenteredDiv, 
         BackgroundAsideDiv 
        } from './Login.styles';
import { Button } from '../../ui/Buttons/Button/Button';
import { ErrorMessage } from '../../ui/ErrorMessage/ErrorMessage';
import { StyledLink } from '../../ui/Link/Link.styles';
import gql from 'graphql-tag';
import { getGQLError } from '../../index';
import { useMutation } from '@apollo/react-hooks';
import { saveToken } from '../../localStorage';
import { pageTransition } from '../Sign Up/SignUp';

const LoginPage: React.FC<any> = (props) => {
    const [loginDetails, setLoginDetails] = useState({
        username: "",
        password: ""
    });

    const [login, { data, error: loginError, loading: loginLoading }] = useMutation(gql`
        mutation Login($username: String!, $password: String!) {
            login(data: { username: $username, password: $password }) {
                accessToken
            }
        }
    `);

    let mutationError = getGQLError(loginError);

    const handleChange = (e: any) => {
        setLoginDetails({
            ...loginDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const { data } = await login({ 
                variables: { username: loginDetails.username, password: loginDetails.password }
            });
            if (data && data.login) {
                saveToken(data.login.accessToken);
            }
            // Redirect user to dashboard page
            props.history.push('/dashboard');
        } catch(e) {
            console.log(e);
        }
    };

    // Login function for guests 
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
                {mutationError && <ErrorMessage error={mutationError} />}
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
                    <Button size="14rem" color="success" onClick={handleSubmit}>Log In</Button>
                    <div style={{position: "relative", top: "10px"}}>
                        <Paragraph>Just want to checkout how things work? Log in as a guest</Paragraph>
                    </div>
                    <Button size="14rem" color="cadetGrey" onClick={handleLoginGuest}>Log In as Guest</Button>
                </CenteredDiv>
            </MainContentDiv>
            <BackgroundAsideDiv />
        </LoginPageDiv>
    )
};

export default LoginPage;