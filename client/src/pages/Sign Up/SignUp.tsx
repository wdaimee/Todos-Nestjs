import React, { useState } from 'react';
import { LoginPageDiv, Header, Paragraph, Input } from '../Log In/Login.styles';
import { SignUpMainDiv, 
         SignUpBackground, 
         SignUpCentered, 
         SignUpLabel, 
        } from './SignUp.styles';

const SignUpPage: React.FC<any> = (props) => {
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    });

    const handleChange = (e: any) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    return(
        <>
            <LoginPageDiv>
                <SignUpBackground />
                <SignUpMainDiv>
                    <SignUpCentered>
                        <Header>Sign Up</Header>
                        <div>
                            <Paragraph>Already have an account? Click here to log in</Paragraph>
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