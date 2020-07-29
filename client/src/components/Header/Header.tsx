import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    background-color: ${props => props.theme.colors.indigo};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Paragraph = styled.p`
    margin: 0rem;
    font-size: 1.6rem;
    color: ${props => props.theme.colors.mintCream};
    text-transform: uppercase;
    font-weight: bold;
`;

const Header: React.FC<any> = () => (
    <>    
        <Div>
            <Paragraph>To-Do</Paragraph>
        </Div>
    </>
);

export default Header;