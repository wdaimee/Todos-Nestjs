import styled from 'styled-components';
import { theme } from '../../../css/theme';
import { ButtonProps } from './Button';

export const StyledButton = styled.button<ButtonProps>`
    background-color: ${({ color }) => theme.colors[color]};
    border: none;
    color: ${theme.colors.mintCream};
    font-size: 1rem;
    height: 1.9rem;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
        color: ${({ color }) => theme.colors[color]};
        background-color: ${theme.colors.mintCream};
        font-weight: bold;
    }
    &:active {
        color: ${({ color }) => theme.colors[color]};
        background-color: ${theme.colors.mintCream};
        font-weight: bold;
        transform: translateY(0.25rem);
    }
    &:focus {
        outline: none;
    }
`;