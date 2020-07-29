import React, { useState, useEffect } from 'react';
import { DashboardPageDiv } from './Dashboard.styles';
import Header from '../../components/Header/Header';
import NavbarMobile from '../../components/Navbar-Mobile/Navbar-Mobile';

const DashboardPage: React.FC<any> = props => {
    const [todosList, setTodosList] = useState([]);
    const [user, setUser] = useState([]);

    // useEffect to pull todosList
    // useEffect to pull the currently logged in user

    return(
        <DashboardPageDiv>
            <Header />
            <div></div>
            <NavbarMobile />
        </DashboardPageDiv>
    )
};

export default DashboardPage;