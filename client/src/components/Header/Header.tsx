import React from 'react';
import { Div, Paragraph } from './Header.styles';

const Header: React.FC<any> = ({ children }) => (
    <>    
        <Div>
            <Paragraph>{children}</Paragraph>
        </Div>
    </>
);

export default Header;