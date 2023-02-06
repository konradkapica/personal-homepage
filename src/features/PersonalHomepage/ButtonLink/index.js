import styled from "styled-components";

export const ButtonLink = styled.a`
    padding: 12px 16px;
    gap: 16px;
    position: relative;
    width: fit-content;
    height: 49px;
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    background-color: ${({ theme }) => theme.button.background};
    transition: 0.3s;
    
    font-weight: 600;
    font-size: 20.0584px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.button.text};

    &:hover {
        box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
    }

    &:active {
        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
    }
`;