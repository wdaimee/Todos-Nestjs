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
    }
`;
