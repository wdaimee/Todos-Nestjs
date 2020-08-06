import React from 'react';
import { NavbarMobileDiv, IconHolderDiv, StyledIcon, StyledP } from './Navbar-mobile.styles';

const NavbarMobile: React.FC<any> = () => {
    return(
        <NavbarMobileDiv>
            <IconHolderDiv>
                <StyledIcon icon="homeIcon" size="2.5rem" color="mintCream"/>
                <StyledP>HOME</StyledP>
            </IconHolderDiv>
            <IconHolderDiv>
                <StyledIcon icon="addIcon" size="2.5rem" color="mintCream"/>
                <StyledP>ADD</StyledP>
            </IconHolderDiv>
            <IconHolderDiv>
                <StyledIcon icon="historyIcon" size="2.5rem" color="mintCream"/>
                <StyledP>HISTORY</StyledP>
            </IconHolderDiv>
        </NavbarMobileDiv>
    )
}

export default NavbarMobile