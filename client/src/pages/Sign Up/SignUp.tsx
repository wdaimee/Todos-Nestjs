import React, { useState } from 'react';
import { LoginPageDiv, Header, Paragraph, Input } from '../Log In/Login.styles';
import { SignUpMainDiv, 
         SignUpBackground, 
         SignUpCentered, 
         SignUpLabel, 
        } from './SignUp.styles';
import { SignUpButton } from '../../ui/Buttons/SignUp Button/SignUpButton';
import { StyledLink } from '../../ui/Link/Link.styles';
import gql from 'graphql-tag';
import { getGQLError } from '../../index';
import { useMutation } from '@apollo/react-hooks';
import { saveToken, getToken } from '../../localStorage';
import { ErrorMessage } from '../../ui/ErrorMessage/ErrorMessage';

export const pageTransition = {
    in: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
}

const signUp = gql`
    mutation SignUp(
                        $username: String!, 
                        $email: String!, 
                        $password: String!, 
                        $firstName: String!,
                        $lastName: String!
                    ) {
                        createUser(data: {
                                    username: $username, 
                                    email: $email, 
                                    password: $password,
                                    firstName: $firstName,
                                    lastName: $lastName
                                }) {
                                      id
                                      username
                                      email
                                      password
                                  }
                    }
`;

const loginUser = gql`
    mutation Login($username: String!, $password: String!) {
        login(data: { username: $username, password: $password}) {
            accessToken
        }
    }
`;

const SignUpPage: React.FC<any> = (props) => {
    const [signUpDetails, setSignUpDetails] = useState({
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    });

    const [login, { data, error: loginError, loading: loginLoading }] = useMutation(loginUser);

    const [createUser, { data: createUserData, error: signUpError, loading: signUpLoading }] = useMutation(signUp);

    let signUpMutError = getGQLError(signUpError);

    const handleChange = (e: any) => {
        setSignUpDetails({
            ...signUpDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (username: string, password: string) => {
        try {
            const { data } = await login({
                variables: { username, password }
            });
            if (data && data.login) {
                saveToken(data.login.accessToken);
            }
            // Redirect user to dashboard page
            props.history.push('/dashboard');
        } catch (e) {
            return
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        createUser({
            variables: { username: signUpDetails.username, 
                         email: signUpDetails.email,
                         password: signUpDetails.password,
                         firstName: signUpDetails.firstName,
                         lastName: signUpDetails.lastName
            }
        })
        if (createUserData && createUserData.createUser) {
            const { username, password } = createUserData.createUser;
            handleLogin(username, password)
        }
    }

    return(
        <>
            <LoginPageDiv 
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
            >
                <SignUpBackground />
                <SignUpMainDiv>
                    <SignUpCentered>
                        {signUpMutError && <ErrorMessage error={signUpMutError} />}
                        <Header>Sign Up</Header>
                        <div style={{position: "relative", bottom: "10px"}}>
                            <Paragraph>Already have an account? <StyledLink to="/login">Click here to log in</StyledLink></Paragraph>
                        </div>
                        <div style={{height: "440px", 
                                        position: "relative",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between"}}>
                            <SignUpLabel>Username:</SignUpLabel>
                            <Input value={signUpDetails.username} name="username" type="text" onChange={handleChange}/>
                            <SignUpLabel>Email:</SignUpLabel>
                            <Input value={signUpDetails.email} name="email" type="text" onChange={handleChange}/>
                            <SignUpLabel>Password:</SignUpLabel>
                            <Input value={signUpDetails.password} name="password" type="password" onChange={handleChange}/>
                            <SignUpLabel>First Name:</SignUpLabel>
                            <Input value={signUpDetails.firstName} name="firstName" type="text" onChange={handleChange}/>
                            <SignUpLabel>Last Name:</SignUpLabel>
                            <Input value={signUpDetails.lastName} name="lastName" type="text" onChange={handleChange}/>
                            <SignUpButton color="success" onClick={handleSubmit}>Sign Up</SignUpButton>
                        </div>
                    </SignUpCentered>
                </SignUpMainDiv>
            </LoginPageDiv>
        </>
    );
}

export default SignUpPage;