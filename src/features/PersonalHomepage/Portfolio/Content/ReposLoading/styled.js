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
    color: ${({ theme }) => theme.site.header};

    @media (max-width: 767px) {
        font-size: 18px;
        text-align: center;
    }
`;

export const Spinner = styled.div`
    width: 160px;
    height: 160px;
    border: 11.375px solid rgba(209, 213, 218, 0.3);
    border-bottom-color: #0366D6;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 0.8s linear infinite;

    @media (max-width: 767px) {
        width: 80px;
        height: 80px;
        border: 8.5px solid rgba(209, 213, 218, 0.3);
        border-bottom-color: #0366D6;
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