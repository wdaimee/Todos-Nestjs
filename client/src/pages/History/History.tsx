import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { DashboardPageDiv, MainContDiv } from '../Dashboard/Dashboard.styles';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Logo from '../../components/Logo/Logo';
import { Modal } from '../../components/Modal/Modal';
import { Todo } from '../../types';
import { Card } from '../../components/Card/Card';

// Query to get todos for logged in user
export const AllTodoList_Query = gql`
    query AllTodosList {
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

const HistoryPage: React.FC<any> = props => {
    const { loading: loadingTodos, data: allTodosListData } = useQuery(AllTodoList_Query);
    const [todosList, setTodosList] = useState<Todo[]>([]);
    // Show Modal for Adding Todo
    const [show, setShow] = useState<boolean>(false);

    // useEffect to pull todosList
    useEffect(() => {
        if(allTodosListData) {
            setTodosList(allTodosListData.allTodos)
        }
    }, [allTodosListData]);

    return(
        <DashboardPageDiv>
            <Logo />
            <Header>History</Header>
            <Modal type="add" show={show} setShow={setShow}/>
            { show ? null : 
                <MainContDiv>
                    <p>History of Your Todos:</p>
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

export default HistoryPage;