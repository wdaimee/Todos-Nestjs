import styled from 'styled-components';

const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.mintCream};
    font-size: 15px;
    margin: 0;
`

const Div = styled.div`
    background-color: ${({ theme }) => theme.colors.black};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`