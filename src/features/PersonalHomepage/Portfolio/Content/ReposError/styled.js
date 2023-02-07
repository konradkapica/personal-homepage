import styled from "styled-components";

export const WrapperError = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 71px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 35px;
    }
`;

export const IconError = styled.div`
    width: 37px;
    margin-bottom: 23px;
`;

export const HeaderError = styled.header`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
    }
`;

export const InfoError = styled.span`
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    max-width: 426px;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 32px;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
    }
`;