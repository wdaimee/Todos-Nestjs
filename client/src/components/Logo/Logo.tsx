import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../ui/Icon/Icon';

const StyledIcon = styled(Icon)`
    margin-right: 5px;
`;

const Paragraph = styled.p`
    margin: 0rem;
    font-size: 1.6rem;
    color: ${props => props.theme.colors.mintCream};
    text-transform: uppercase;
    font-weight: bold;
`;

const Logo: React.FC<any> = () => (
    <>    
        <StyledIcon icon="logoIcon" size="1.6rem" color="mintCream" />
        <Paragraph>Todos!</Paragraph>
    </>
);

export default Logo;