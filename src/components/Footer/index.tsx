import Logo from "../Logo";
import NetWork from "../Network";
import * as S from "./styles";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <S.Rodape>
      <a href="/" className="logo" aria-label="Logo Joaojustodev" title="logo">
        <Logo />
      </a>
      <strong>Never stop learning.</strong>
      <NetWork />
      <a href="/">&copy; {year} joaojustodev.github.io</a>
      <span>Made with React</span>
    </S.Rodape>
  );
};

export default Footer;
