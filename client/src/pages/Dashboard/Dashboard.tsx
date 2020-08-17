import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { DashboardPageDiv } from './Dashboard.styles';
import Header from '../../components/Header/Header';
import NavbarMobile from '../../components/Navbar-Mobile/Navbar-Mobile';
import { Modal } from '../../components/Modal/Modal';
import { User, Todo } from '../../types';
import { Card } from '../../components/Card/Card';

// Query to get logged in user and update state
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

// Query to get todos for logged in user
const TodoList_Query = gql`
    query TodosList {
        allTodos {
            id,
            title,
            body,
            dateCreated,
            dueDate,
            dateCompleted,
            status
        }
    }
`;

const DashboardPage: React.FC<any> = props => {
    const { loading, error, data: loggedInUser } = useQuery(LoggedInUser_Query);
    const { loading: loadingTodos, data: todosListData } = useQuery(TodoList_Query);
    const [todosList, setTodosList] = useState<Todo[]>([]);
    const [user, setUser] = useState<User>();
    // Show Modal for Adding Todo
    const [show, setShow] = useState<boolean>(false);

    // useEffect to set Logged In User
    useEffect(() => {
        if(loggedInUser) {
            setUser(loggedInUser.currentLoggedInUser);
        }
    }, [loggedInUser]);

    // useEffect to pull todosList
    useEffect(() => {
        if(todosListData) {
            setTodosList([...todosList, todosListData.allTodos])
        }
    }, [todosListData]);

    return(
        <DashboardPageDiv>
            <Header>Home</Header>
            <div>
                {loadingTodos ? <h1>Loading Todos</h1> : <Card title="some title" status="open" body="some notes"/>}
                <Modal type="add" show={show} setShow={setShow}/>
            </div>
            <NavbarMobile setShow={setShow}/>
        </DashboardPageDiv>
    )
};

export default DashboardPage;