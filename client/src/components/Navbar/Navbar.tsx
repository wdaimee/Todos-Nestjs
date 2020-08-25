import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarDiv, IconHolderDiv, StyledIcon, StyledP, StyledNameDiv } from './Navbar.styles';
import { deleteToken } from '../../localStorage';
import { History } from 'history';
import { User } from '../../types';
import { client } from '../../index';

export interface NavbarProps {
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>,
    history: History,
    user: User
}

const Navbar: React.FC<NavbarProps> = ({ history, setShow, user, setShowEditModal }) => {
    const logout = () => {
        deleteToken();
        client.clearStore();
        history.push('login');
    }

    // Function to open add modal, if edit modal is open, close edit modal
    const openAddModal = (e: any) => {
        setShow(true);
        setShowEditModal(false);
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
            <IconHolderDiv onClick={openAddModal}>
                <StyledIcon icon="addIcon" size="2.5rem" color="mintCream"/>
                <StyledP>add</StyledP>
            </IconHolderDiv>
            <IconHolderDiv>
                <StyledIcon icon="profileIcon" size="2.5rem" color="mintCream"/>
                <StyledP>profile</StyledP>
            </IconHolderDiv>
            <IconHolderDiv onClick={logout}>
                <StyledIcon icon="logoutIcon" size="2.1rem" color="mintCream"/>
                <StyledP>logout</StyledP>
            </IconHolderDiv>
            <StyledNameDiv>
                {user ? 
                    <>
                        <StyledP>{user.firstName} {user.lastName}</StyledP> 
                        <StyledP>{user.email}</StyledP>
                    </>
                    : 
                    null
                }
            </StyledNameDiv>
        </NavbarDiv>
    )
}

export default Navbar;