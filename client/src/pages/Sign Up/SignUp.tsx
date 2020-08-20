import React, { useState } from 'react';
import { LoginPageDiv, Header, Paragraph, Input } from '../Log In/Login.styles';
import { SignUpMainDiv, 
         SignUpBackground, 
         SignUpCentered, 
         SignUpLabel,
         StyledButton
        } from './SignUp.styles';
import { StyledLink } from '../../ui/Link/Link.styles';
import gql from 'graphql-tag';
import { getGQLError } from '../../index';
import { useMutation } from '@apollo/react-hooks';
import { saveToken, getUserFromToken } from '../../localStorage';
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

    const [createUser, { data, error: signUpError, loading: signUpLoading }] = useMutation(signUp);

    let signUpMutError = getGQLError(signUpError);

    const handleChange = (e: any) => {
        setSignUpDetails({
            ...signUpDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
        const { data } = await createUser({
            variables: { username: signUpDetails.username, 
                         email: signUpDetails.email,
                         password: signUpDetails.password,
                         firstName: signUpDetails.firstName,
                         lastName: signUpDetails.lastName
            }
        });
        if (data && data.createUser) {
            saveToken(data.createUser.accessToken);
        }
        // Set user state when user logs in
        let user = getUserFromToken();
        props.setUser(user);
        // Redirect user to dashboard page
        props.history.push('/dashboard');
        } catch(e) {
            return
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
                            <StyledButton size="14rem" color="success" onClick={handleSubmit}>Sign Up</StyledButton>
                        </div>
                    </SignUpCentered>
                </SignUpMainDiv>
            </LoginPageDiv>
        </>
    );
}

export default SignUpPage;