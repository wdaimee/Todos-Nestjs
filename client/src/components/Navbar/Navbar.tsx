import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarDiv, IconHolderDiv, StyledIcon, StyledP, StyledNameDiv } from './Navbar.styles';
import { deleteToken } from '../../localStorage';
import { History } from 'history';
import { User } from '../../types';

export interface NavbarProps {
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
    history: History,
    user: User
}

const Navbar: React.FC<NavbarProps> = props => {
    const logout = () => {
        deleteToken();
        props.history.push('login');
    }

    return(
        <NavbarDiv>
            <Link to="/dashboard">
                <IconHolderDiv>
                    <StyledIcon icon="homeIcon" size="2.5rem" color="mintCream"/>
                    <StyledP>home</StyledP>
                </IconHolderDiv>
            </Link>
            <Link to="/history">
                <IconHolderDiv>
                    <StyledIcon icon="historyIcon" size="2.5rem" color="mintCream"/>
                    <StyledP>history</StyledP>
                </IconHolderDiv>
            </Link>
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
            <StyledNameDiv>
                {props.user ? 
                    <>
                        <StyledP>{props.user.firstName} {props.user.lastName}</StyledP> 
                        <StyledP>{props.user.email}</StyledP>
                    </>
                    : 
                    null
                }
            </StyledNameDiv>
        </NavbarDiv>
    )
}

export default Navbar;