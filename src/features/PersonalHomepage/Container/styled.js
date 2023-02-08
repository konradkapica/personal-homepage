import styled from "styled-components";

export const Container = styled.main`
max-width: 1216px;
margin: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
            display: flex;
            flex-direction: column;
        }
`;