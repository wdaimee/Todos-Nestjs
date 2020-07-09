import React, { HTMLAttributes } from 'react';
import { StyledSignUpButton } from './SignUpButton.styles';
import { ButtonProps } from '../Button/Button';

export const LoginButton: React.FC<ButtonProps> = ({
    color,
    children
}) => 
    <StyledSignUpButton color={color}>
        {children}
    </StyledSignUpButton>;