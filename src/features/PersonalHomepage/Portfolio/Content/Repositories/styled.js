import styled from "styled-components";

export const Wrapper = styled.ul`
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
        justify-items: center;
    }
`;

export const Container = styled.li`
    width: 100%;
    height: 322px;
    padding: 56px;
    color: ${({ theme }) => theme.tile.background};
    border: 6px solid rgba(209, 213, 218, 0.3);
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;

    &:hover {
        border: 6px solid rgba(3, 102, 214, 0.2);
    }

    @media (max-width: 640px) {
        padding: 24px;
        height: fit-content;
    }
`;

export const Title = styled.h3`
    font-weight: 700;
    font-size: clamp(16px, 5vw, 24px);
    line-height: 29px;
    letter-spacing: 0.05em;
    margin-top: 0;
    color: ${({ theme }) => theme.button.background};
`;

export const Description = styled.p`
    height: fit-content;
    font-weight: 400;
    font-size: clamp(14px, 4vw, 18px);
    line-height: 1.4;
    letter-spacing: 0.05em;
    margin: 0 0 24px 0;
    height: 75px;
    color: ${({ theme }) => theme.site.text};
`;

export const LinkContainer = styled.div`
    display: flex;
    margin-bottom: 8px;
`;

export const Text = styled.span`
    font-weight: 400;
    font-size: clamp(14px, 5vw, 18px);
    line-height: 1.4;
    letter-spacing: 0.05em;
    min-width: 65px;
    color: ${({ theme }) => theme.site.text};
`;

export const StyledLink = styled.a`
    font-weight: 400;
    font-size: clamp(14px, 5vw, 18px);
    line-height: 1.4;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.button.background};

    &:hover {
        filter: brightness(125%);
    }
`;