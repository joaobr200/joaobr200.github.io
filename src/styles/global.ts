import { createGlobalStyle, useTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }
  
  *::selection {
      background: ${({ theme }) => theme.selection};
      color: ${({ theme }) => theme.color}
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
    font-family: Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    transition: background cubic-bezier(0.215, 0.610, 0.355, 1) linear;
  }

  a,
  ul {
    text-decoration:none;
    list-style:none;
  }
  
  a:active {
    outline:none;
  }

  button {
    border: none;
    background: transparent;
  }

  .container {
    width: 100%;
    max-width:1127px;
    
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

  .underline::after {
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
