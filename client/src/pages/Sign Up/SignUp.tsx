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
import { useMutation } from '@apollo/react-hooks';

const signUp = gql`
    mutation SignUp(
                        $username: String!, 
                        $email: String!, 
                        $password: String!, 
                        $firstName: String!,
                        $lastName: String!
                    ) {
                        createUser(
                                    username: $username, 
                                    email: $email, 
                                    password: $password,
                                    firstName: $firstName,
                                    lastName: $lastName
                                  ) {
                                      id
                                      username
                                      email
                                  }
                    }
`;

const SignUpPage: React.FC<any> = (props) => {
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    });

    const [createUser, { data }] = useMutation(signUp);

    const handleChange = (e: any) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    return(
        <>
            <LoginPageDiv 
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
            >
                <SignUpBackground />
                <SignUpMainDiv>
                    <SignUpCentered>
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
                            <Input value={state.username} name="username" type="text" onChange={handleChange}/>
                            <SignUpLabel>Email:</SignUpLabel>
                            <Input value={state.email} name="email" type="text" onChange={handleChange}/>
                            <SignUpLabel>Password:</SignUpLabel>
                            <Input value={state.password} name="password" type="password" onChange={handleChange}/>
                            <SignUpLabel>First Name:</SignUpLabel>
                            <Input value={state.firstName} name="firstName" type="text" onChange={handleChange}/>
                            <SignUpLabel>Last Name:</SignUpLabel>
                            <Input value={state.lastName} name="lastName" type="text" onChange={handleChange}/>
                            <SignUpButton color="success">Sign Up</SignUpButton>
                        </div>
                    </SignUpCentered>
                </SignUpMainDiv>
            </LoginPageDiv>
        </>
    );
}

export default SignUpPage;