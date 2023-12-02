import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
    }
    
    h1 {
        font-family: 'Poppins';
        font-size: 150px;
        font-weight: 400;
        line-height: 140px;
        letter-spacing: 0em;
        text-align: left;
    }

    h2 {
        font-family: 'Poppins';
        font-size: 62px;
        font-weight: 600;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: left;
    }

    h3 {
        font-family: 'Poppins';
        font-size: 48px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: left;
    }

    h4 {
        width: 550px;
        height: 48px;
        font-family: 'Poppins';
        font-size: 24px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: center;
    }

    h5 {
        font-family: 'Poppins';
        font-size: 32px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: center;
    }

    input {
        width: calc(100% - 60px);
        height: auto;
        border-radius: 5px;
        background-color: #EDEDEF;
        outline: none;
        border: none;
        padding: 15px;
        margin: 1px;
        font-family: 'Montserrat';
        font-size: 21px; 
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: #424243;
    }
`

export default GlobalStyle