import React from 'react';
import { NavbarMobileDiv, IconHolderDiv, StyledIcon, StyledP } from './Navbar-mobile.styles';

const NavbarMobile: React.FC<{setShow: React.Dispatch<React.SetStateAction<boolean>>}> = props => {
    
    return(
        <NavbarMobileDiv>
            <IconHolderDiv>
                <StyledIcon icon="homeIcon" size="2.5rem" color="mintCream"/>
                <StyledP>home</StyledP>
            </IconHolderDiv>
            <IconHolderDiv>
                <StyledIcon icon="historyIcon" size="2.5rem" color="mintCream"/>
                <StyledP>history</StyledP>
            </IconHolderDiv>
            <IconHolderDiv onClick={e => props.setShow(true)}>
                <StyledIcon icon="addIcon" size="2.5rem" color="mintCream"/>
                <StyledP>add</StyledP>
            </IconHolderDiv>
            <IconHolderDiv>
                <StyledIcon icon="profileIcon" size="2.5rem" color="mintCream"/>
                <StyledP>profile</StyledP>
            </IconHolderDiv>
            <IconHolderDiv>
                <StyledIcon icon="historyIcon" size="2.5rem" color="mintCream"/>
                <StyledP>logout</StyledP>
            </IconHolderDiv>
        </NavbarMobileDiv>
    )
}

export default NavbarMobile