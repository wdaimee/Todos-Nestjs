import React from 'react';
import styles from './LogIn.module.css';
import Footer from '../../components/Footer/Footer';

const LoginPage: React.FC<any> = () => 
    <div className={styles.login_page}>
        <h1>Login Page</h1>
        <Footer />
    </div>    

export default LoginPage;