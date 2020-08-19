import React, { HTMLAttributes } from 'react';
import { StyledButton } from './Button.styles';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    color: 'success' | 'cadetGrey',
    size?: string
}

export const Button: React.FC<ButtonProps> = ({
    color,
    size,
    children,
    onClick,
    className
}) => 
    <StyledButton className={className} color={color} onClick={onClick} size={size}>
        {children}
    </StyledButton>;