import styled from "styled-components";
import { ReactComponent as MessageItem } from "./icons/message.svg"

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 66px;
    align-items: center;
    margin-bottom: 63px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 13px;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 50%;
    transition: 0.7s;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 133px;
        height: 133px;
    }
`;

export const Content = styled.div`
    
`;

export const SubHeader = styled.h2`
    font-weight: 700;
    font-size: 12px;
    line-height: 1.3;
    margin-bottom: 12px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.site.text};
`;

export const Name = styled.header`
    font-weight: 900;
    font-size: clamp(22px, 5vw, 38px);
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Info = styled.p`
    font-weight: 400;
    font-size: clamp(17, 5vw, 20px);
    line-height: 1.4;
    max-width: 633px;
    margin-top: 35px;
    margin-bottom: 32px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.site.text};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 16px;
    }
`;

export const Message = styled(MessageItem)`
    width: 19.23px;
    height: 17.12px;
`;