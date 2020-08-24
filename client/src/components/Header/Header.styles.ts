import styled from 'styled-components';

export const Div = styled.div`
    background-color: ${props => props.theme.colors.oxfordBlue};
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        grid-column-start: 2;
        grid-column-end: 3;
    }
`;

export const Paragraph = styled.p`
    margin: 0rem;
    font-size: 1.6rem;
    color: ${props => props.theme.colors.mintCream};
    text-transform: uppercase;
    font-weight: bold;
`;