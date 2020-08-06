import React from 'react';
import { NavbarMobileDiv, IconHolderDiv, StyledIcon, StyledP } from './Navbar-mobile.styles';

const NavbarMobile: React.FC<any> = () => {
    return(
        <NavbarMobileDiv>
            <IconHolderDiv>
                <StyledIcon icon="addIcon" size="2.5rem" color="mintCream"/>
                <StyledP>Add</StyledP>
            </IconHolderDiv>
        </NavbarMobileDiv>
    )
}

export default NavbarMobile