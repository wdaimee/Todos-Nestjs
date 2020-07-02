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
    font-size: 1.5rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.colors.mintCream};
`;

const Paragraph = styled.p`
    font-size: 0.8rem;
    line-height: 12px;
    color: ${({ theme }) => theme.colors.mintCream};
    display: inline;
`;

const Input = styled.input`
    padding: 0.5rem;
    margin: 0.5rem 0;
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.mintCream};
    border: none;
    width: 100%;
    box-sizing: border-box;
`

const Button = styled.button`
    background-color: ${(props) => props.theme.colors.success};
    border: none;
    color: ${({ theme }) => theme.colors.mintCream};
    width: 100%;
    font-size: 1rem;
    height: 25px;
`

const Label = styled.label`
    color: ${({ theme }) => theme.colors.mintCream};
    font-size: 1.3rem;
    display: block;
    text-align: start;
`

const LoginPage: React.FC<any> = (props) => {
    
    return(
        <>
            <LoginPageDiv>
                <MainContentDiv>
                    <Header>Login Page</Header>
                    <Paragraph>Don't have an account? Create an Account</Paragraph>
                    <div>
                        <Label>Username:</Label>
                        <Input name="username" type="text" />
                        <Label>Password:</Label>
                        <Input name="password" type="text" />
                        <Button color="success">Log In</Button>
                    </div>
                </MainContentDiv>
                <Footer />
            </LoginPageDiv>
        </>
    )
};

export default LoginPage;