import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }

  blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0;
}

  html {
    scroll-behavior: smooth;
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-family: "Roboto", sans-serif;
    transition: background 0.2s linear;
  }

  a,
  ul {
    text-decoration:none;
    list-style:none;
  }
  
  a:active {
    outline:none;
  }

  .container {
    width: 100%;
    max-width:1280px;
    
    margin:0 auto;
    padding:8px;
  }
  h2 {
      font-size: 2rem;
      line-height: 2.28125rem;
      color: ${({ theme }) => theme.color};
    }

    p {
        font-size: 1.1rem;
        line-height: 1.6575rem;
      }

  .underline-black::after {
    content: "";
      width: 36px;
      height: 4px;
      display: block;
      background: ${({ theme }) => theme.color};
  }

  .underline-gray::after {
    content: "";
      width: 36px;
      height: 4px;
      display: block;
      background: ${({ theme }) => theme.colors.gray[300]};
  }



  @media screen and (max-width: 768px) {
      p {
        font-size: 1rem;
        line-height: 1.5rem;
      }
    
  }
  


`;
