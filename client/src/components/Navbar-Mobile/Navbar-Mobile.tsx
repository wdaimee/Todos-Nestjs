import React from 'react';
import { NavbarMobileDiv, IconHolderDiv, StyledIcon, StyledP } from './Navbar-mobile.styles';
import { deleteToken } from '../../localStorage';
import { History } from 'history';

export interface NavbarProps {
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
    history: History
}

const NavbarMobile: React.FC<NavbarProps> = props => {
    const logout = () => {
        deleteToken();
        props.history.push('login');
    }

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
            <IconHolderDiv onClick={logout}>
                <StyledIcon icon="logoutIcon" size="2.5rem" color="mintCream"/>
                <StyledP>logout</StyledP>
            </IconHolderDiv>
        </NavbarMobileDiv>
    )
}

export default NavbarMobile