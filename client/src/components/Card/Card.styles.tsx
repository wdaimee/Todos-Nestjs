import styled from 'styled-components';

interface MainDivProps {
    status?: string
}

export const MainDiv = styled.div<MainDivProps>`
    width: 100%;
    height: 4.4rem;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: ${props => props.status === 'open' ? props.theme.colors.cadetGrey : props.theme.colors.darkGrey};
    display: grid;
    grid-template-columns: 12% 1fr 30%;
    grid-template-rows: 1fr;

`;

export const CircleButton = styled.div`
    width: 1.6rem;
    height: 1.6rem;
    border: 2px solid ${props => props.theme.colors.black};
    border-radius: 50%;
    background-color: ${props => props.theme.colors.grey};
    place-self: center;
    &:hover {
        cursor: pointer
    }
`;