import React from 'react';
import { StyledLoginButton } from './LoginButton.styles';
import { ButtonProps } from '../Button/Button';

export const LoginButton: React.FC<ButtonProps> = ({
    color,
    children,
    onClick
}) => 
    <StyledLoginButton color={color} onClick={onClick}>
        {children}
    </StyledLoginButton>;