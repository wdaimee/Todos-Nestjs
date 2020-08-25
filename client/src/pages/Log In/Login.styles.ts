import styled from 'styled-components';
import { theme } from '../../css/theme';
import { motion } from 'framer-motion';

export const LoginPageDiv = styled(motion.div)`
    background-color: ${theme.colors.indigo};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const MainContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-Y: scroll;
`;

export const Header = styled.h1`
    font-size: 1.5rem;
    color: ${theme.colors.mintCream};
`;

export const Paragraph = styled.p`
    font-size: 0.8rem;
    color: ${theme.colors.mintCream};
    display: inline;
    margin: 0rem;
    position: relative;
`;

export const Input = styled.input`
    padding: 0.5rem;
    color: ${theme.colors.black};
    background: ${theme.colors.mintCream};
    border: none;
    width: 14rem;
    box-sizing: border-box;
    &:focus {
        outline: none;
    }
`;

export const Label = styled.label`
    color: ${theme.colors.mintCream};
    font-size: 1.3rem;
    display: block;
    position: relative;
    right: 4.1rem;
`;

export const CenteredDiv = styled.div`
    height: 26.3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const BackgroundAsideDiv = styled.div`
    display: none;
    @media (min-width: 768px) {
        display: inline;
        background: url("https://i.imgur.com/Ix3KA09.jpg");
        background-size: cover;
        grid-column-start: 2;
    }
`;

export const LogoDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

