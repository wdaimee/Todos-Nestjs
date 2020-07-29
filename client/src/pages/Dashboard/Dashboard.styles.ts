import styled from 'styled-components';

export const DashboardPageDiv = styled.div`
    background-color: ${props => props.theme.colors.grey};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 6% 1fr 10%;
`;