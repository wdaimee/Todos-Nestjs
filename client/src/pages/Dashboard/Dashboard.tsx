import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { MainContDiv } from './Dashboard.styles';
import Header from '../../components/Header/Header';
import { Modal } from '../../components/Modal/Modal';
import { Todo } from '../../types';
import { Card } from '../../components/Card/Card';

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
    const { loading: loadingTodos, data: todosListData } = useQuery(TodoList_Query);
    const [todosList, setTodosList] = useState<Todo[]>([]);

    // useEffect to pull todosList
    useEffect(() => {
        if(todosListData) {
            setTodosList(todosListData.allTodosToday)
        }
    }, [todosListData]);

    return(
        <>
            <Header>Home</Header>
            <Modal type="add" show={props.show} setShow={props.setShow} />
            <Modal type="edit" showEditModal={props.showEditModal} 
                               setShowEditModal={props.setShowEditModal} 
                               editTodoDetails={props.editTodoDetails} 
            />
            { props.show || props.showEditModal ? null : 
                <MainContDiv>
                    <p>All Your Upcoming Todos:</p>
                    {loadingTodos ? <h1>Loading Todos</h1> : 
                        todosList[0] ? todosList.map((todo: Todo) => (
                            <Card key={todo.id}
                                id={todo.id} 
                                title={todo.title}
                                body={todo.body}
                                dueDate={todo.dueDate}
                                dateCompleted={todo.dateCompleted}
                                status={todo.status}
                                setEditTodoDetails={props.setEditTodoDetails}
                                setShowEditModal={props.setShowEditModal}
                            />
                        )) : <h1>No Todos</h1>}
                </MainContDiv>
            }
        </>
    )
};

export default DashboardPage;
