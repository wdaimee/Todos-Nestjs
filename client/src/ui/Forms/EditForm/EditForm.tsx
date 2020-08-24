import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { getGQLError } from '../../../index';
import { Header, Label, Input, ButtonDiv, StyledButton } from '../AddForm/AddForm.styes';
import { ErrorMessage } from '../../ErrorMessage/ErrorMessage';
import { TodoList_Query } from '../../../pages/Dashboard/Dashboard';
import { AllTodoList_Query } from '../../../pages/History/History';
import { EditState } from '../../../pages/App/App';

export interface EditFormProps {
    setShowEditModal?: React.Dispatch<React.SetStateAction<boolean>>;
    editTodoDetails?: EditState;
}

export const EditForm: React.FC<EditFormProps> = ({ setShowEditModal, editTodoDetails }) => {
    const [editTodoDetailsState, setEditTodoDetailsState] = useState<EditState>({
        id: "",
        title: "",
        notes: "",
        dueDate: ""
    });

    // Set the edit todo detail set to the edit details state props handed down
    useEffect(() => {
        setEditTodoDetailsState({
            id: editTodoDetails?.id,
            title: editTodoDetails?.title,
            notes: editTodoDetails?.notes,
            dueDate: editTodoDetails?.dueDate
        })
    }, [editTodoDetails]);

    const [updateTodo, { data, error: updateTodoError }] = useMutation(gql`
        mutation UPDATE_TODO($id: String!, $title: String, $body: String, $dueDate: String) {
            updateTodo(id: $id, data: { title: $title, body: $body, dueDate: $dueDate }) {
                id
                title
                dueDate
            }
        }
    `);

    let mutationError = getGQLError(updateTodoError);

    const handleChange = (e: any) => {
        setEditTodoDetailsState({
            ...editTodoDetailsState,
            [e.target.name]: e.target.value
        });
    };

    // Function handle submitting edit form, refetch Todo List queries
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const { data } = await updateTodo({
                variables: { id: editTodoDetailsState.id, title: editTodoDetailsState.title, body: editTodoDetailsState.notes, dueDate: editTodoDetailsState.dueDate },
                refetchQueries: [{ query: TodoList_Query}, { query: AllTodoList_Query }]
            });
            if(data && data.updateTodo && setShowEditModal) {
                setShowEditModal(false);
            } 
        } catch(e) {
            return
        }
    };

    return(
        <>
            <Header>Edit To-Do</Header>
            {mutationError && <ErrorMessage error={mutationError} />}
            <form onSubmit={handleSubmit}>
                <Label>
                    Title:
                </Label>
                <Input type="text" name="title" 
                    value={editTodoDetailsState ? editTodoDetailsState.title : undefined} 
                    onChange={handleChange} />
                <Label>
                    Notes:
                </Label>
                <textarea rows={5} cols={26} name="notes" 
                    value={editTodoDetailsState ? editTodoDetailsState.notes : undefined} 
                    onChange={handleChange} />
                <Label>
                    Due Date:
                </Label>
                {/* value for date will strip off everything after T for date */}
                <Input type="date" name="dueDate" 
                    // If the dueDate state is initialized by props (contains "T") string T
                    // strip string "T" and all characters after it and display due date. If due
                    // date has changed, do not manipulate the string. 
                    value={editTodoDetailsState.dueDate?.includes("T") ? 
                            editTodoDetailsState.dueDate?.substr(0, editTodoDetailsState.dueDate?.indexOf("T")) 
                            : 
                            editTodoDetailsState.dueDate
                        } 
                    onChange={handleChange} />
                <ButtonDiv>
                    <StyledButton size="6.5rem" color="success" onClick={e => handleSubmit}>
                        EDIT
                    </StyledButton>
                    <StyledButton size="6.5rem" color="cadetGrey" onClick={e => setShowEditModal ? setShowEditModal(false) : null}>
                        CANCEL
                    </StyledButton>
                </ButtonDiv>
            </form>
        </>
    )
}