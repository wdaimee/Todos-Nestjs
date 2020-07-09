import React, { HTMLAttributes } from 'react';
import { StyledButton } from './Button.styles';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    color: 'success' | 'cadetGrey',
}

export const Button: React.FC<ButtonProps> = ({
    color,
    children
}) => 
    <StyledButton color={color}>
        {children}
    </StyledButton>;