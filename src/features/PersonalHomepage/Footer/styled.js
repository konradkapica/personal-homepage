import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 670px;
    margin-top: 120px;

    @media (max-width: 767px) {
        gap: 12px;
        margin-top: 48px;
    }
`;

export const SubHeader = styled.h2`
    font-weight: 700;
    font-size: 12px;
    line-height: 1.3;
    text-transform: uppercase;
    margin: 0;
    color: ${({theme}) => theme.site.text};
`;

export const Header = styled.header`
    font-weight: 900;
    font-size: clamp(18px, 5vw, 32px);
    line-height: 39px;
    letter-spacing: 0.05em;
    color: ${({theme}) => theme.site.header};
    cursor: pointer;

    &:hover {
        color: ${({theme}) => theme.button.background}
    }
`;

export const Info = styled.p`
    font-weight: 400;
    font-size: clamp(14px, 5vw, 18px);
    line-height: 1.4;
    letter-spacing: 0.05em;
    margin: 0;
    color: ${({theme}) => theme.site.header};
`;

export const Container = styled.div`
    margin-top: 56px;

    @media (max-width: 767px) {
        margin-top: 40px;
    }
`;

export const Link = styled.a`
    display: inline-block;
    width: 48px;
    height: 48px;
    margin-right: 24px;
    cursor: pointer;
    filter: saturate(0) contrast(300%);

    &:hover {
        filter: saturate(100%);
    }

    @media (max-width: 767px) {
        width: 31px;
        height: 31px;
    }
`;