import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { getGQLError } from '../../../index';
import { Header, Label, Input, ButtonDiv, StyledButton } from './AddForm.styes';
import { ErrorMessage } from '../../ErrorMessage/ErrorMessage';
import { TodoList_Query } from '../../../pages/Dashboard/Dashboard';
import { AllTodoList_Query } from '../../../pages/History/History';

export interface AddFormProps {
    setShow?: React.Dispatch<React.SetStateAction<boolean>>;
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
                variables: { title: addTodoDetails.title, body: addTodoDetails.notes, dueDate: addTodoDetails.dueDate },
                refetchQueries: [{ query: TodoList_Query}, { query: AllTodoList_Query }]
            });
            if(data && data.createTodo && setShow) {
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
                    <StyledButton size="6.5rem" color="success" onClick={e => handleSubmit}>
                        ADD
                    </StyledButton>
                    <StyledButton size="6.5rem" color="cadetGrey" onClick={e => setShow ? setShow(false) : null}>
                        CANCEL
                    </StyledButton>
                </ButtonDiv>
            </form>
        </>
    )
}