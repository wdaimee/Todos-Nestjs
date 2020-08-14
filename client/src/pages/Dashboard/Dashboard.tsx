import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { DashboardPageDiv } from './Dashboard.styles';
import Header from '../../components/Header/Header';
import NavbarMobile from '../../components/Navbar-Mobile/Navbar-Mobile';
import { Modal } from '../../components/Modal/Modal';

const LoggedInUser_Query = gql`
    query LoggedInUser {
        currentLoggedInUser {
            id,
            username,
            email,
            firstName,
            lastName
        }
    }
`;

const DashboardPage: React.FC<any> = props => {
    const { loading, error, data: loggedInUser } = useQuery(LoggedInUser_Query);
    const [todosList, setTodosList] = useState([]);
    const [user, setUser] = useState([]);
    // Show Modal
    const [show, setShow] = useState(false);

    // useEffect to set Logged In User
    useEffect(() => {
        if(loggedInUser) {
            setUser(loggedInUser);
        }
    }, [loggedInUser]);

    // useEffect to pull todosList

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