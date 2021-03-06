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
    box-shadow: ${props => props.status === 'open' ? '0px 2px 5px black' : 'none'};
    background-color: ${props => props.status === 'open' ? props.theme.colors.cadetGrey : props.theme.colors.darkGrey};
    display: grid;
    grid-template-columns: 12% 1fr 1fr 20%;
    grid-template-rows: 1.2rem 1fr 1.2rem;
    @media (min-width: 768px) {
        width: 99%;
        margin-left: 5px;
        margin-right: 5px;
        height: 7.0rem;
    }
`;

export const CircleButton = styled.div`
    width: 1.6rem;
    height: 1.6rem;
    border: 2px solid ${props => props.theme.colors.black};
    border-radius: 50%;
    background-color: ${props => props.theme.colors.grey};
    box-shadow: 3px 3px 5px ${props => props.theme.colors.greyedOut};
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
    @media (min-width: 768px) {
        justify-content: center;
    }
`;

export const StyledIcon = styled(Icon)`
    place-self: center;
    &:hover {
        cursor: pointer
    }
    @media (min-width: 768px) {
        margin-left: 1rem;
    }
`;

export const StyledCheckIcon = styled(StyledIcon)`
    grid-row-start: 2;
`;

export const StyledHeader = styled.h1<Props>`
    font-size: 1.0rem;
    text-decoration: ${({ status }) => status === 'complete' ? 'line-through' : 'none'};  
    color: ${props => props.status === 'complete' ? props.theme.colors.greyedOut : props.theme.colors.black};
    text-shadow: ${props => props.status === 'open' ? '3px 3px 5px #808080' : 'none'};
    justify-self: start;
    align-self: center;
    grid-column-start: 2;
    grid-column-end: 4;
`;

export const StyledNotes = styled.p<Props>`
    font-size: 1.0rem;
    text-decoration: ${({ status }) => status === 'complete' ? 'line-through' : 'none'};
    color: ${props => props.status === 'complete' ? props.theme.colors.greyedOut : props.theme.colors.black};
    text-shadow: ${props => props.status === 'open' ? '3px 3px 5px #808080' : 'none'};
    grid-column-start: 2;
    grid-column-end: 4;
    margin: 0;
    justify-self: start;
    overflow-Y: hidden;
    @media (min-width: 768px) {
        margin-top: 0.5rem;
    }
`;

export const StyledDate = styled.p<Props>`
    text-transform: uppercase;
    font-size: 1.0rem;
    text-shadow: ${props => props.status === 'open' ? '3px 3px 5px #808080' : 'none'};
    margin: 0;
    justify-self: center;
    align-self: center;
    grid-column-end: span 2;
`;