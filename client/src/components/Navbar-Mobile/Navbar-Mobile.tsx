import React from 'react';
import { NavbarMobileDiv, IconHolderDiv, StyledIcon, StyledP } from './Navbar-mobile.styles';

const NavbarMobile: React.FC<any> = () => {
    return(
        <NavbarMobileDiv>
            <IconHolderDiv>
                <StyledIcon icon="homeIcon" size="2.5rem" color="mintCream"/>
                <StyledP>home</StyledP>
            </IconHolderDiv>
            <IconHolderDiv>
                <StyledIcon icon="addIcon" size="2.5rem" color="mintCream"/>
                <StyledP>add</StyledP>
            </IconHolderDiv>
            <IconHolderDiv>
                <StyledIcon icon="historyIcon" size="2.5rem" color="mintCream"/>
                <StyledP>history</StyledP>
            </IconHolderDiv>
            <IconHolderDiv>
                <StyledIcon icon="profileIcon" size="2.5rem" color="mintCream"/>
                <StyledP>profile</StyledP>
            </IconHolderDiv>
        </NavbarMobileDiv>
    )
}

export default NavbarMobile