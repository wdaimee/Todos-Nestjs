import React, { useState, useEffect } from 'react';
import { DashboardPageDiv } from './Dashboard.styles';
import Header from '../../components/Header/Header';
import NavbarMobile from '../../components/Navbar-Mobile/Navbar-Mobile';
import { Modal } from '../../components/Modal/Modal';

const DashboardPage: React.FC<any> = props => {
    const [todosList, setTodosList] = useState([]);
    const [user, setUser] = useState([]);
    // Show Modal
    const [show, setShow] = useState(false);

    // useEffect to pull todosList
    // useEffect to pull the currently logged in user

    return(
        <DashboardPageDiv>
            <Header />
            <div>
                <Modal type="add" show={show} setShow={setShow}/>
            </div>
            <NavbarMobile setShow={setShow}/>
        </DashboardPageDiv>
    )
};

export default DashboardPage;