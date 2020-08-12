import styled from 'styled-components';

export const BackgroundDiv = styled.div`
    background: rgba(0, 0, 0, 0.2);
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
`;