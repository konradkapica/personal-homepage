import styled from "styled-components";
import { ReactComponent as BulletItem } from "./bullet.svg"

export const StyledTile = styled.article`
    margin-top: 63px;
    margin-bottom: 9px;
    max-height: 404px;
    padding: 32px 33px 32px 32px;
    background-color: ${({ theme }) => theme.tile.background};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
`;

export const Title = styled.h2`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    margin: 0;
    padding-bottom: 15px;
    letter-spacing: 0.05em;
    border-bottom: 1px solid rgba(209, 213, 218, 0.3);
    color: ${({ theme }) => theme.site.header};
`;

export const StyledList = styled.ul`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    list-style: none;
    margin: 0;
    padding: 32px 0 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px 95px;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.site.text};
`;

export const Bullet = styled(BulletItem)`
align-items: center;
    width: 9px;
    margin-right: 16px;
`;