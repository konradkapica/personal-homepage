import styled from "styled-components";
import { ReactComponent as BulletItem } from "./bullet.svg";

export const StyledTile = styled.article`
    margin-bottom: 72px;
    height: fit-content;
    padding: 32px 33px 32px 32px;
    background: ${({ theme }) => theme.colors.boxBackground};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-bottom: 50px;
        padding: 16px;
    }
`;

export const Title = styled.h2`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    margin: 0;
    padding-bottom: 15px;
    letter-spacing: 0.05em;
    border-bottom: 1px solid ${({ theme }) => theme.colors.buttonLink.ironTransparent};
    color: ${({ theme }) => theme.colors.textPrimary};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: clamp(18px, 6vw, 25px);
        line-height: 22px;
        padding-bottom: 12px;
    }
`;

export const StyledList = styled.ul`
    font-weight: 400;
    font-size: clamp(14px, 5vw, 18px);
    line-height: 1.4;
    letter-spacing: 0.05em;
    list-style: none;
    margin: 0;
    padding: 32px 0 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px 95px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
        padding: 12px 0 0 0;
    }
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.site.text};
`;

export const Bullet = styled(BulletItem)`
    align-items: center;
    width: 9px;
    margin-right: 16px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 8px;
        margin-right: 8px;
    }
`;