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
    grid-template-columns: 12% 1fr 1fr 20%;
    grid-template-rows: 1.2rem 1fr 1.2rem;
`;

export const CircleButton = styled.div`
    width: 1.6rem;
    height: 1.6rem;
    border: 2px solid ${props => props.theme.colors.black};
    border-radius: 50%;
    background-color: ${props => props.theme.colors.grey};
    grid-row-start: 2;
    place-self: center;
    &:hover {
        cursor: pointer
    }
`;

export const IconDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    grid-row-start: 2;
    grid-column-start: 4;
`;

export const StyledIcon = styled(Icon)`
    place-self: center;
    &:hover {
        cursor: pointer
    }
`;

export const StyledCheckIcon = styled(StyledIcon)`
    grid-row-start: 2;
`;

export const StyledHeader = styled.h1<Props>`
    font-size: 1.0rem;
    text-decoration: ${({ status }) => status === 'complete' ? 'line-through' : 'none'};  
    color: ${props => props.status === 'complete' ? props.theme.colors.greyedOut : props.theme.colors.black};
    justify-self: start;
    align-self: center;
    grid-column-start: 2;
    grid-column-end: 4;
`;

export const StyledNotes = styled.p<Props>`
    font-size: 1.0rem;
    text-decoration: ${({ status }) => status === 'complete' ? 'line-through' : 'none'};
    color: ${props => props.status === 'complete' ? props.theme.colors.greyedOut : props.theme.colors.black};
    grid-column-start: 2;
    grid-column-end: 4;
    margin: 0;
    justify-self: start;
`;

export const StyledDate = styled.p`
    font-size: 1.0rem;
    margin: 0;
    justify-self: center;
    grid-column-end: span 2;
`;