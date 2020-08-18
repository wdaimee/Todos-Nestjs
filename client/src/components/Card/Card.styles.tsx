import styled from 'styled-components';
import { Icon } from '../../ui/Icon/Icon';

interface Props {
    status?: string
}

export const MainDiv = styled.div<Props>`
    width: 100%;
    height: 5.0rem;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: ${props => props.status === 'open' ? props.theme.colors.cadetGrey : props.theme.colors.darkGrey};
    display: grid;
    grid-template-columns: 12% 1fr 20%;
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

export const IconDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const StyledIcon = styled(Icon)`
    place-self: center;
    &:hover {
        cursor: pointer
    }
`;

export const ContentDiv = styled.div`
    display: grid; 
    grid-template-rows: 1.2rem 1fr 1.2rem;
    grid-template-columns: 1fr 1fr;
`;

export const StyledHeader = styled.h1`
    font-size: 1.0rem;
    place-self: center;
    grid-column-start: 1;
    grid-column-end: 3;
`;

export const StyledNotes = styled.p`
    font-size: 1.0rem;
    grid-column-start: 1;
    grid-column-end: 3;
    margin: 0;
    justify-self: start;
`;

export const StyledDate = styled.p`
    font-size: 1.0rem;
    margin: 0;
    justify-self: start;
`;