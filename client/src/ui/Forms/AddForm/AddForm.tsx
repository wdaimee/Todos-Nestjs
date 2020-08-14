import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { getGQLError } from '../../../index';
import { Header, Label, Input, ButtonDiv } from './AddForm.styes';
import { AddTodoButton } from '../../Buttons/AddTodo Button/AddTodoButton';
import { ErrorMessage } from '../../ErrorMessage/ErrorMessage';

export interface AddFormProps {
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddForm: React.FC<AddFormProps> = ({ setShow }) => {
    const [addTodoDetails, setAddTodoDetails] = useState({
        title: "",
        notes: "",
        dueDate: ""
    });

    const [addTodo, { data, error: addTodoError, loading: loadingAddTodo }] = useMutation(gql`
        mutation ADD_TODO($title: String!, $body: String!, $dueDate: String!) {
            createTodo(data: { title: $title, body: $body, dueDate: $dueDate }) {
                id,
                title,
                status
            }
        }
    `);

    let mutationError = getGQLError(addTodoError);

    const handleChange = (e: any) => {
        setAddTodoDetails({
            ...addTodoDetails,
            [e.target.name]: e.target.value
        });
    };

    // Function handle submit, also needs to retrigger the query to get all Todos
    // Also needs to close the modal

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const { data } = await addTodo({
                variables: { title: addTodoDetails.title, body: addTodoDetails.notes, dueDate: addTodoDetails.dueDate }
            });
            if(data && data.createTodo) {
                setShow(false);
            } 
        } catch(e) {
            return
        }
    };

    return(
        <>
            <Header>Add To-Do</Header>
            {mutationError && <ErrorMessage error={mutationError} />}
            <form onSubmit={handleSubmit}>
                <Label>
                    Title:
                </Label>
                <Input type="text" name="title" value={addTodoDetails.title} onChange={handleChange} />
                <Label>
                    Notes:
                </Label>
                <textarea rows={5} cols={26} name="notes" value={addTodoDetails.notes} onChange={handleChange} />
                <Label>
                    Due Date:
                </Label>
                <Input type="date" name="dueDate" value={addTodoDetails.dueDate} onChange={handleChange} />
                <ButtonDiv>
                    <AddTodoButton color="success" onClick={e => handleSubmit}>
                        ADD
                    </AddTodoButton>
                    <AddTodoButton color="cadetGrey" onClick={e => setShow(false)}>
                        CANCEL
                    </AddTodoButton>
                </ButtonDiv>
            </form>
        </>
    )
}