import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer/Footer';

const LoginPageDiv = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10fr 1fr;
    justify-content: center;
`

const LoginPage: React.FC<any> = () => 
    <>
        <LoginPageDiv>
            <h1>Login Page</h1>
            <Footer />
        </LoginPageDiv>
    </>

export default LoginPage;