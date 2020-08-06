import styled from 'styled-components';
import { Icon } from '../../ui/Icon/Icon';

export const NavbarMobileDiv = styled.div`
    background-color: ${({ theme }) => theme.colors.indigo};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    @media (min-width: 768px) {
        display: none;
    }
`;

export const IconHolderDiv = styled.div`
    border-right: solid 2px ${({ theme }) => theme.colors.black};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
`;

export const StyledIcon = styled(Icon)`
    place-self: center;
`;

export const StyledP = styled.p`
    color: ${({ theme }) => theme.colors.mintCream};
    font-size: 0.8rem;
    margin: 0;
    place-self: center;
    font-weight: bold;
`;