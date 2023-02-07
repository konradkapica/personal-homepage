import styled from "styled-components";
import { css } from "styled-components";
import { ReactComponent as SunIcon } from "./icons/sun.svg";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Button = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    color: inherit;
    outline-offset: 8px;
`;

export const Text = styled.span`
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    margin-right: 12px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: none;
    }
`;

export const Container = styled.span`
    background: ${({ theme }) => theme.colors.themeSwitch.background};
    border: solid 1px;
    padding: 3px;
    border-radius: 15px;
    width: 48px;
    display: flex;
`;

export const IconWrapper = styled.span`
    background: currentColor;
    padding: 3px;
    border-radius: 50%;
    display: flex;
    transition: transform 0.25s;

    ${({ moveToRight }) => moveToRight && css`
        transform: translateX(20px);
    `}
`;

export const Icon = styled(SunIcon)`
    color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;