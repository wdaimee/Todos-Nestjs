import styled from 'styled-components';
import { theme } from '../../css/theme';
import { ButtonProps } from './Button';

export const StyledButton = styled.button<ButtonProps>`
background-color: ${({ color }) => theme.colors[color]};
border: none;
color: ${theme.colors.mintCream};
font-size: 1rem;
height: 30px;
box-sizing: border-box;
`;