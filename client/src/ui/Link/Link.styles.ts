import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../css/theme';

export const StyledLink = styled(Link)`
    color: ${theme.colors.mintCream};
    text-decoration: underline !important;
    &:hover {
        color: blue;
    }
`;