import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { DashboardPageDiv, MainContDiv } from './Dashboard.styles';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { Modal } from '../../components/Modal/Modal';
import { Todo } from '../../types';
import { Card } from '../../components/Card/Card';
import Logo from '../../components/Logo/Logo';

// Query to get logged in user and update state
export const LoggedInUser_Query = gql`
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
export const TodoList_Query = gql`
    query TodosList {
        allTodosToday {
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
    // Show Modal for Adding Todo
    const [show, setShow] = useState<boolean>(false);

    // useEffect to set Logged In User
    useEffect(() => {
        if(loggedInUser) {
            props.setUser(loggedInUser.currentLoggedInUser);
        }
    }, [loggedInUser]);

    // useEffect to pull todosList
    useEffect(() => {
        if(todosListData) {
            setTodosList(todosListData.allTodosToday)
        }
    }, [todosListData]);

    return(
        <DashboardPageDiv>

            <Header>Home</Header>
            <Logo />
            <Modal type="add" show={show} setShow={setShow}/>
            { show ? null : 
                <MainContDiv>
                    <p>All Your Upcoming Todos:</p>
                    {loadingTodos ? <h1>Loading Todos</h1> : null}
                    {todosList ? todosList.map((todo: Todo) => (
                        <Card key={todo.id}
                            id={todo.id} 
                            title={todo.title}
                            body={todo.body}
                            dueDate={todo.dueDate}
                            dateCompleted={todo.dateCompleted}
                            status={todo.status}
                        />
                    )) : <h1>No Todos</h1>}
                </MainContDiv>
            }
            <Navbar setShow={setShow} history={props.history} user={props.user} />
        </DashboardPageDiv>
    )
};

export default DashboardPage;