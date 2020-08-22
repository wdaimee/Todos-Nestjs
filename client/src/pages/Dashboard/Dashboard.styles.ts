import styled from 'styled-components';

interface Props {
    show?: boolean
}

export const DashboardPageDiv = styled.div`
    background-color: ${props => props.theme.colors.grey};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 6% 1fr 10%;
    @media (min-width: 768px) {
        grid-template-rows: 6% 1fr;
        grid-template-columns: 1fr 2fr;
    }
`;

export const MainContDiv = styled.div`
    overflow-y: scroll;
    @media (min-width: 768px) {
        grid-column-start: 2;
        grid-row-start: 2;
    }
`;

export const LogoDiv = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    background-color: ${props => props.theme.colors.oxfordBlue};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 767px) {
        display: none;
    }
`;