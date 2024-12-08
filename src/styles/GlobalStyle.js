import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root {
        width: 100%;
        height: 100%;
        display: contents;
    }

    :root {
        width: 100%;
        height: 100%;
        font-size: 20px;
        --text-color-light: black;
        --text-color-dark: white;
        --small-device: 568px;
        --medium-device: 968px;
    }

    /* Wireframe */

    body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    main {
        width: 100%;
        min-height: 80vh;
    }
    
    header {
        width: 100%;
        border-bottom: 1px solid silver;
        padding-bottom: 10px;
        padding-top: 10px;
        margin-bottom: 10px;
    }

    footer {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        border-top: 1px solid silver;
        margin-top: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    h1 {
        font-size: 2rem;
    }
    h2 {
        font-size: 1.5rem;
    }
    p {
        font-size: 1rem;
    }
`;

export default GlobalStyle;