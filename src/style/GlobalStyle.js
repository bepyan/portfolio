import { createGlobalStyle } from "styled-components";
import './index.css';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        /* font-family: 'Do Hyeon', sans-serif; */
        /* font-family: 'Noto Serif KR', serif; */
        font-family: 'SCDream5', serif;
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