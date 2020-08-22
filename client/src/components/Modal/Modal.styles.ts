import styled from 'styled-components';
import { Icon } from '../../ui/Icon/Icon';

export const BackgroundDiv = styled.div`
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const ModalDiv = styled.div`
    background: ${props => props.theme.colors.indigo};
    height: 80%;
    width: 80%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-Y: scroll;
    @media (min-width: 767px) {
        height: 50%;
        width: 60%;
    }
    @media (min-width: 1025px) {
        height: 65%;
        width: 50%;
    }
`;

export const StyledClearIcon = styled(Icon)`
    position: absolute;
    top: 0;
    right: 0;
`;