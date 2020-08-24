import React, { HTMLAttributes } from 'react';
import { PageDiv } from './Page.styles';

const Page: React.FC<HTMLAttributes<HTMLDivElement>> = ({
    children
    
}) => 
    <PageDiv>
        {children}
    </PageDiv>;

export default Page;