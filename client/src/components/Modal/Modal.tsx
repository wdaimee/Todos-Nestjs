import React from 'react';
import { BackgroundDiv, ModalDiv } from './Modal.styles';

// Type to select which type of Modal should be shown 
export type Type = "add" | "edit" | "profile";

export interface ModalProps extends React.HTMLProps<HTMLElement> {
    show?: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    type: Type;
}

export const Modal: React.FC<ModalProps> = ({ show, title, setShow }) => {
    return(
        <>
            { show ? 
                <BackgroundDiv>
                    <ModalDiv onClick={e => setShow(false)}>

                    </ModalDiv>
                </BackgroundDiv>
                :
                null
            }
        </>
    )
};