import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer/Footer';

const LoginPageDiv = styled.div`
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.indigo};
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
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.mintCream};
`;

const Paragraph = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.mintCream};
    display: inline;
`;

const Input = styled.input`
    padding: 0.5rem;
    margin: 0.5rem;
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.mintCream};
    border: none;
    width: 50%;
`

const Button = styled.button`
    background-color: ${(props) => props.theme.colors[props.color]};
    border: none;
    color: ${({ theme }) => theme.colors.mintCream};
    width: 50%;
    font-size: 1rem;
`

const LoginPage: React.FC<any> = (props) => (
    <>
        <LoginPageDiv>
            <MainContentDiv>
                <Header>Login Page</Header>
                <Paragraph>Don't have an account? </Paragraph>
                <Paragraph>Create an Account</Paragraph>
                <Input defaultValue='Username' type="text" />
                <Input defaultValue='Password' type="text" />
                <Button color='success'>Log In</Button>
            </MainContentDiv>
            <Footer />
        </LoginPageDiv>
    </>
);

export default LoginPage;