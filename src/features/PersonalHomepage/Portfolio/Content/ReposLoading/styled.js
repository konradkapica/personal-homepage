import styled from "styled-components";

export const WrapperLoading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 64px;
    gap: 48px;
`;

export const TextLoading = styled.span`
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;  
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
        text-align: center;
    }
`;

export const Spinner = styled.div`
    width: 160px;
    height: 160px;
    border: 11.375px solid ${({ theme }) => theme.colors.buttonLink.ironTransparent};
    border-bottom-color: #0366D6;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 0.8s linear infinite;

    @media (max-width: ${({ theme }) => theme.colors.buttonLink.ironTransparent}px) {
        width: 80px;
        height: 80px;
        border: 8.5px solid ${({ theme }) => theme.colors.buttonLink.ironTransparent};
        border-bottom-color: ${({ theme }) => theme.colors.primary};
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
`;