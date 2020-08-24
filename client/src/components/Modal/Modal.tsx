import React from 'react';
import { BackgroundDiv, ModalDiv, StyledClearIcon } from './Modal.styles';
import { AddForm } from '../../ui/Forms/AddForm/AddForm';

// Type to select which type of Modal should be shown 
export type Type = "add" | "edit" | "profile";

export interface ModalProps extends React.HTMLProps<HTMLElement> {
    show?: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    type: Type;
}

export const Modal: React.FC<ModalProps> = ({ show, type, setShow }) => {
    return(
        <>
            {/* Show Modal if show state is true else show nothing */}
            { show ? 
                <BackgroundDiv>
                    <ModalDiv>
                        <StyledClearIcon 
                            icon="clearIcon" 
                            size="1.9rem" 
                            color="cadetGrey"
                            onClick={e => setShow(false)} 
                        />
                        {/* If type is equal to 'add' populate addform into modal */}
                        { type === "add" ? 
                            <AddForm setShow={setShow}/> 
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