import React from 'react';
import { StyledSignUpButton } from './SignUpButton.styles';
import { ButtonProps } from '../Button/Button';

export const SignUpButton: React.FC<ButtonProps> = ({
    color,
    children,
    onClick
}) => 
    <StyledSignUpButton color={color} onClick={onClick}>
        {children}
    </StyledSignUpButton>;