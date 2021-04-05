import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        /* font-family: 'Do Hyeon', sans-serif; */
        font-family: 'Noto Serif KR', serif;
    }
    body{
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera*/
        }
    }
    p {
        font-size: 16px;
    }
    a {
        color: black;

    }
`;

export default GlobalStyle;