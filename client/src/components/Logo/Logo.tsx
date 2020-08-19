import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../ui/Icon/Icon';

const StyledIcon = styled(Icon)`
    margin-right: 5px;
`;

const Div = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    background-color: ${props => props.theme.colors.oxfordBlue};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 767px) {
        display: none;
    }
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
        <Div>
            <StyledIcon icon="logoIcon" size="1.6rem" color="mintCream" />
            <Paragraph>Todos!</Paragraph>
        </Div>
    </>
);

export default Logo;