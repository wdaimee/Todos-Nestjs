import React, { HTMLProps } from 'react';
import styled from 'styled-components';

import {theme as t} from '../../css/theme';

export interface ErrorMessageProps extends HTMLProps<HTMLSpanElement> {
    error: string;
}

const StyledErrorMessage: React.FC<HTMLProps<HTMLSpanElement>> = styled.span<ErrorMessageProps>`
    display: block;
    text-align: center;
    color: ${t.colors.error};
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
`;

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => 
    <StyledErrorMessage>{error}</StyledErrorMessage>