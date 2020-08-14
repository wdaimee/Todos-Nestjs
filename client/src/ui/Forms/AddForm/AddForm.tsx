import React, { useState } from 'react';
import { Header, Label, Input, ButtonDiv } from './AddForm.styes';
import { AddTodoButton } from '../../Buttons/AddTodo Button/AddTodoButton';

export interface AddFormProps {
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddForm: React.FC<AddFormProps> = ({ setShow }) => {
    const [addTodoDetails, setAddTodoDetails] = useState({
        title: "",
        notes: "",
        dueDate: ""
    });

    const handleChange = (e: any) => {
        setAddTodoDetails({
            ...addTodoDetails,
            [e.target.name]: e.target.value
        });
    };

    // Function handle submit, also needs to retrigger the query to get all Todos
    // Also needs to close the modal

    return(
        <>
            <Header>Add To-Do</Header>
            <form>
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
                    <AddTodoButton color="success">
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