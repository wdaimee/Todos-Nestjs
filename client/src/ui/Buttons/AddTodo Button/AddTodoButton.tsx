import React from 'react';
import { StyledAddTodoButton } from './AddTodoButton.styles';
import { ButtonProps } from '../Button/Button';

export const AddTodoButton: React.FC<ButtonProps> = ({
    color,
    children,
    onClick
}) => 
    <StyledAddTodoButton color={color} onClick={onClick}>
        {children}
    </StyledAddTodoButton>;