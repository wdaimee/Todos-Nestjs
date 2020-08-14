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
`;

export const StyledClearIcon = styled(Icon)`
    position: absolute;
    top: 0;
    right: 0;
`;