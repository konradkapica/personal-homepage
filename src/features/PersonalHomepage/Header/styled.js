import styled from "styled-components";
import {ReactComponent as MessageItem} from "./icons/message.svg"

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;
    align-items: center;
    margin-bottom: 63px;
`;

export const Image = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 50%;
`;

export const Content = styled.div`
    
`;

export const SubHeader = styled.h2`
    font-weight: 700;
    font-size: 12px;
    line-height: 1.3;
    margin-bottom: 12px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.site.text};
`;

export const Name = styled.header`
    font-weight: 900;
    font-size: 38px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.site.header};
`;

export const Info = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    max-width: 633px;
    margin-top: 35px;
    margin-bottom: 32px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.site.text};
`;

export const MailButton = styled.a`
    padding: 12px 16px;
    gap: 16px;
    position: relative;
    width: 154px;
    height: 49px;
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    background-color: ${({ theme }) => theme.button.background};
    
    font-weight: 600;
    font-size: 20.0584px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.button.text};
`;

export const Message = styled(MessageItem)`
    width: 19.23px;
    height: 17.12px;
`;