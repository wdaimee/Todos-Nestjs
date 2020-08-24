import React from 'react';
import { MainDiv, CircleButton, StyledIcon, IconDiv, StyledHeader, StyledNotes, StyledDate, StyledCheckIcon } from './Card.styles';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { TodoList_Query } from '../../pages/Dashboard/Dashboard';
import { AllTodoList_Query } from '../../pages/History/History';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
    title: string;
    body?: string;
    dueDate?: string;
    dateCompleted?: string | null;
    status: string;
    setEditTodoDetails: React.Dispatch<React.SetStateAction<{
        id?: string;
        title?: string;
        notes?: string;
        dueDate?: string;
    }>>;
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Card: React.FC<CardProps> = ({ id, title, body, dueDate, dateCompleted, status, setEditTodoDetails, setShowEditModal }) => {
    // Mutation for deleting a Todo
    const [deleteTodo, { data, error, loading}] = useMutation(gql`
        mutation DeleteTodo($id: String!) {
            deleteTodo(id: $id)
        }
    `);

    // Mutation for changing the status of a todo from open to close, close to open
    const [changeTodoStatus, { data: todoStatus }] = useMutation(gql`
        mutation ChangeTodoStatus($id: String!) {
            changeStatus(id: $id) {
                id
            }
        }
    `); 

    // Function to handle deleting a todo, refetch the Todo List queries once complete
    const handleDelete = async (e: any) => {
        try {
            await deleteTodo({
                variables: { id },
                refetchQueries: [{ query: TodoList_Query}, { query: AllTodoList_Query }]
            })
        } catch(e) {
            return
        }
    }

    // Function to handle the edit button click
    const handleEdit = (e: any) => {
        setEditTodoDetails({
            id,
            title,
            notes: body,
            dueDate
        });
        setShowEditModal(true);
    }

    // Function to handle changing the status of a todo, refetch the Todo List queries once complete
    const handleStatusChange = async (e: any) => {
        try {
            await changeTodoStatus({
                variables: { id },
                refetchQueries: [{ query: TodoList_Query}, { query: AllTodoList_Query }]
            })
        } catch(e) {
            console.log(e)
        }
    }

    return(
        <MainDiv status={status}>
            {status === 'open' ? <CircleButton onClick={handleStatusChange}/> : <StyledCheckIcon icon="checkCircleIcon" size="2.0rem" color="success" onClick={handleStatusChange}/>}
            <StyledHeader status={status}>{title.toUpperCase()}</StyledHeader>
            <StyledNotes status={status}>{body}</StyledNotes>
            <StyledDate status={status}>Due: {dueDate?.substr(0, dueDate.indexOf("T"))}</StyledDate>
            {dateCompleted ? <StyledDate>Complete: {dateCompleted?.substr(0, dateCompleted.indexOf("T"))}</StyledDate> : null}
            <IconDiv>
                {status === 'open' ? <StyledIcon icon="editShadowIcon" size="2.0rem" color="black" onClick={handleEdit} /> 
                    : 
                <StyledIcon icon="editIcon" size="2.0rem" color="black" onClick={handleEdit} />}
                {status === 'open' ? <StyledIcon icon="deleteShadowIcon" size="2.0rem" color="error" onClick={handleDelete} /> 
                    : 
                <StyledIcon icon="deleteIcon" size="2.0rem" color="error" onClick={handleDelete} />}
            </IconDiv>
        </MainDiv>
    );
}