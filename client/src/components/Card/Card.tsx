import React, { useState } from 'react';
import { MainDiv, CircleButton, StyledIcon, IconDiv, ContentDiv, StyledHeader, StyledNotes, StyledDate } from './Card.styles';
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
    const [cardStatus, setCardStatus] = useState(status)

    const [deleteTodo, { data, error, loading}] = useMutation(gql`
        mutation DeleteTodo($id: String!) {
            deleteTodo(id: $id)
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

    return(
        <MainDiv status={cardStatus}>
            {cardStatus === 'open' ? <CircleButton /> : <StyledIcon icon="checkCircleIcon" size="1.6rem" color="black"/>}
            <ContentDiv>
                <StyledHeader>{title}</StyledHeader>
                <StyledNotes>{body}</StyledNotes>
                <StyledDate>{dueDate}</StyledDate>
                <StyledDate>{dateCompleted}</StyledDate>
            </ContentDiv>
            <IconDiv>
                <StyledIcon icon="editIcon" size="2.0rem" color="black" />
                <StyledIcon icon="deleteIcon" size="2.0rem" color="error" onClick={handleDelete}/>
            </IconDiv>
        </MainDiv>
    );
}