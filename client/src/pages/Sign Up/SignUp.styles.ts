import styled from 'styled-components';
import { MainContentDiv, BackgroundAsideDiv, CenteredDiv, Label } from '../Log In/Login.styles';
import { Button } from '../../ui/Buttons/Button/Button';


export const SignUpMainDiv = styled(MainContentDiv)`
@media (min-width: 768px) {
    grid-column-start: 2;
}
`;

export const SignUpBackground = styled(BackgroundAsideDiv)`
    display: none;
    @media (min-width: 768px) {
        display: inline;
        background: url("https://i.imgur.com/wR8DzvN.jpg");
        background-size: cover;
        grid-column-start: 1;
        grid-column-end: 2;
    }
`;

export const SignUpCentered = styled(CenteredDiv)`
    height: 37.5rem;
    justify-content: center;
`;

export const SignUpLabel = styled(Label)`
    right: 0;
    text-align: start;
`;

export const StyledButton = styled(Button)`
    position: relative;
    top: 10px;
`;
