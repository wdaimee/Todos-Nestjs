import React, { useState } from 'react';
import { LoginPageDiv } from '../Log In/Login.styles';
import { SignUpMainDiv } from './SignUp.styles';

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

            </LoginPageDiv>
        </>
    );
}

export default SignUpPage;