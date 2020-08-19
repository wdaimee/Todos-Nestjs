import styled from 'styled-components';
import { Icon } from '../../ui/Icon/Icon';

export const NavbarDiv = styled.div`
    background-color: ${({ theme }) => theme.colors.indigo};
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    @media (min-width: 768px) {
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 2;
        padding-top: 2rem;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 40%;
        grid-template-columns: 1fr;
    }
`;

export const IconHolderDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
    @media (min-width: 768px) {
        display: block;
    }
`;

export const StyledIcon = styled(Icon)`
    place-self: center;
`;

export const StyledP = styled.p`
    color: ${({ theme }) => theme.colors.mintCream};
    text-decoration: none;
    font-size: 0.8rem;
    margin: 0;
    place-self: center;
    font-weight: bold;
    text-transform: uppercase;
`;
