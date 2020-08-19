import styled from 'styled-components';
import { Button } from '../../Buttons/Button/Button';

export const Header = styled.h1`
    margin: 0;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.mintCream};
`;

export const Label = styled.label`
    color: ${props => props.theme.colors.mintCream};
    font-size: 1.3rem;
    display: block;
    text-align: start;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
`;

export const Input = styled.input`
    padding: 0.5rem;
    color: ${props => props.theme.colors.black};
    background: ${props => props.theme.colors.mintCream};
    border: none;
    width: 14rem;
    box-sizing: border-box;
    &:focus {
        outline: none;
    }
`;

export const ButtonDiv = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const StyledButton = styled(Button)`
    display: inline-block;
`;