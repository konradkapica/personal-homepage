import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body {
    font-family: 'Inter', sans-serif;
    word-break: break-word;
    padding-top: 115px;
    background-color: ${({theme}) => theme.site.background};
    }
`;