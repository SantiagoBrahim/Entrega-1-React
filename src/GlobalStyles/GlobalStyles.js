import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


:root{
    --primary: #C73E3E;
    --secondary: #D9D9D9;

    --title-font: "Dela Gothic One";
    --text-font: "Autour One";
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html{
    scroll-behavior: smooth;
}

    body{
        color: var(--primary);
        background-color: var(--secondary);
        font-family: var(--text-font), sans-serif;
    }

    body::-webkit-scrollbar{
        background: var(--secondary);
    }

    body::-webkit-scrollbar-thumb{
        background: var(--primary);
    }

    body::-webkit-scrollbar-thumb:hover{
        background: #A02F2F;
    }

`;
