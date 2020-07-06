import React, { HTMLAttributes } from 'react';
import { StyledLoginButton } from './LoginButton.styles';
import { ButtonProps } from '../Button/Button';

export const LoginButton: React.FC<ButtonProps> = ({
    color,
    children
}) => 
    <StyledLoginButton color={color}>
        {children}
    </StyledLoginButton>;