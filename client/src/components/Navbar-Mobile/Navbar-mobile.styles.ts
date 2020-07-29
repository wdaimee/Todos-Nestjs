import styled from 'styled-components';

export const NavbarMobileDiv = styled.div`
    background-color: ${props => props.theme.colors.indigo};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    @media (min-width: 768px) {
        display: none;
    }
`;