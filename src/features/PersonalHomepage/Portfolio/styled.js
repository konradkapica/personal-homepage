import styled from "styled-components";

export const StyledArticle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
`;

export const Icon = styled.div`
    width: 40px;
    height: 39.01px;
`;

export const Header = styled.h2`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    margin: 5px 0 0 0;
    color: ${({ theme }) => theme.site.header};
`;

export const SubHeader = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin: 0;
    color: ${({ theme }) => theme.site.header};
`;