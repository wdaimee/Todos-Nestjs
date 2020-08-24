import React from 'react';
import { Paragraph, StyledIcon } from './Logo.styles';

const Logo: React.FC<any> = () => (
    <>    
        <StyledIcon icon="logoIcon" size="1.6rem" color="mintCream" />
        <Paragraph>Todos!</Paragraph>
    </>
);

export default Logo;