import React from 'react';
import { BackgroundDiv } from './Modal.styles';

// Add Type to Modal and choose between Add, Edit, and Profile

export type Type = "add" | "edit" | "profile";

export interface ModalProps extends React.HTMLProps<HTMLElement> {
    show?: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    type: Type;
}

export const Modal: React.FC<ModalProps> = ({ show, title, setShow }) => {
    return(
        <>
            { show ? <BackgroundDiv>
                        <div style={{ backgroundColor: 'blue' }} onClick={e => setShow(false)}>{title}</div>
                    </BackgroundDiv>
                :
                null
            }
        </>
    )
};