import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
    color: #EEF4ED;
    font-size: 15px;
`

const Div = styled.div`
    background-color: #134074;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Footer: React.FC<any> = () => (
    <>    
        <Div>
            <Paragraph>Created By WDaimee</Paragraph>
        </Div>
    </>
);

export default Footer;

