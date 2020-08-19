import React from 'react';
import { MainDiv, CircleButton, StyledIcon, IconDiv, StyledHeader, StyledNotes, StyledDate, StyledCheckIcon } from './Card.styles';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { TodoList_Query } from '../../pages/Dashboard/Dashboard';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    id: string;
    title: string;
    body?: string;
    dueDate?: string;
    dateCompleted?: string | null;
    status: string;
};

export const Card: React.FC<CardProps> = ({ id, title, body, dueDate, dateCompleted, status}) => {
    const [deleteTodo, { data, error, loading}] = useMutation(gql`
        mutation DeleteTodo($id: String!) {
            deleteTodo(id: $id)
        }
    `);

    const [changeTodoStatus, { data: todoStatus }] = useMutation(gql`
        mutation ChangeTodoStatus($id: String!) {
            changeStatus(id: $id) {
                id
            }
        }
    `); 

    const handleDelete = async (e: any) => {
        try {
            await deleteTodo({
                variables: { id },
                refetchQueries: [{ query: TodoList_Query }]
            })
        } catch(e) {
            return
        }
    }

    const handleStatusChange = async (e: any) => {
        try {
            await changeTodoStatus({
                variables: { id },
                refetchQueries: [{ query: TodoList_Query }]
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
                {status === 'open' ? <StyledIcon icon="editShadowIcon" size="2.0rem" color="black" /> 
                    : 
                <StyledIcon icon="editIcon" size="2.0rem" color="black" />}
                {status === 'open' ? <StyledIcon icon="deleteShadowIcon" size="2.0rem" color="error" onClick={handleDelete}/> 
                    : 
                <StyledIcon icon="deleteIcon" size="2.0rem" color="error" onClick={handleDelete}/>}
            </IconDiv>
        </MainDiv>
    );
}