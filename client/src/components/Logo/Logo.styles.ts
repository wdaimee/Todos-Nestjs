import styled from 'styled-components';
import { Icon } from '../../ui/Icon/Icon';

export const StyledIcon = styled(Icon)`
    margin-right: 5px;
`;

export const Paragraph = styled.p`
    margin: 0rem;
    font-size: 1.6rem;
    color: ${props => props.theme.colors.mintCream};
    text-transform: uppercase;
    font-weight: bold;
`;