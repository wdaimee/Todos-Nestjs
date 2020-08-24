import React from 'react';
import { BackgroundDiv, ModalDiv, StyledClearIcon } from './Modal.styles';
import { AddForm } from '../../ui/Forms/AddForm/AddForm';
import { EditForm } from '../../ui/Forms/EditForm/EditForm';
import { EditState } from '../../pages/App/App';

// Type to select which type of Modal should be shown 
export type Type = "add" | "edit" | "profile";

export interface ModalProps extends React.HTMLProps<HTMLElement> {
    show?: boolean;
    setShow?: React.Dispatch<React.SetStateAction<boolean>>;
    showEditModal?: boolean;
    setShowEditModal?: React.Dispatch<React.SetStateAction<boolean>>;
    type: Type;
    editTodoDetails?: EditState;
}

export const Modal: React.FC<ModalProps> = ({ show, setShow, showEditModal, setShowEditModal, type, editTodoDetails }) => {
    
    // Function to handle closing of modal component
    const handleClose = (e: any) => {
        if (show && setShow) {
            setShow(false);
        } else if (showEditModal && setShowEditModal) {
            setShowEditModal(false)
        }
    }

    return(
        <>
            {/* Show Modal if show or showEditModal state is true else show nothing */}
            { show || showEditModal ? 
                <BackgroundDiv>
                    <ModalDiv>
                        <StyledClearIcon 
                            icon="clearIcon" 
                            size="1.9rem" 
                            color="cadetGrey"
                            onClick={handleClose} 
                        />
                        {/* If type is equal to 'add' populate addform into modal */}
                        { type === "add" ? 
                            <AddForm setShow={setShow} /> 
                            :
                            null
                        }
                        {/* If type is equal to 'edit' populate editform into modal */}
                        { type === "edit" ? 
                            <EditForm setShowEditModal={setShowEditModal} editTodoDetails={editTodoDetails} />
                            :
                            null
                        }
                    </ModalDiv>
                </BackgroundDiv>
                :
                null
            }
        </>
    )
};