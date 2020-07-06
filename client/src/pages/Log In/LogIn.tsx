import React, { useState, HTMLAttributes } from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer/Footer';
import { theme } from '../../css/theme';
import { Button } from '../../ui/Button/Button';

const LoginPageDiv = styled.div`
    height: 100vh;
    background-color: ${theme.colors.indigo};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10fr 1fr;
    justify-content: center;
`;

const MainContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Header = styled.h1`
    font-size: 1.5rem;
    line-height: 1.6rem;
    color: ${theme.colors.mintCream};
`;

const Paragraph = styled.p`
    font-size: 0.8rem;
    line-height: 12px;
    color: ${theme.colors.mintCream};
    display: inline;
`;

const Input = styled.input`
    padding: 0.5rem;
    margin: 0.5rem 0;
    color: ${theme.colors.black};
    background: ${theme.colors.mintCream};
    border: none;
    width: 100%;
    box-sizing: border-box;
`

const Label = styled.label`
    color: ${theme.colors.mintCream};
    font-size: 1.3rem;
    display: block;
    text-align: start;
`

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
                    <Header>Login Page</Header>
                    <Paragraph>Don't have an account? Create an Account</Paragraph>
                    <form>
                        <Label>Username:</Label>
                        <Input value={state.username} name="username" type="text" onChange={handleChange}/>
                        <Label>Password:</Label>
                        <Input value={state.password} name="password" type="password" onChange={handleChange}/>
                        <Button color="success">Log In</Button>
                    </form>
                    <Paragraph>Just want to checkout how things work? Log in as a guest</Paragraph>
                    <Button color="cadetGrey">Log In as Guest</Button>
                </MainContentDiv>
                <Footer />
            </LoginPageDiv>
        </>
    )
};

export default LoginPage;