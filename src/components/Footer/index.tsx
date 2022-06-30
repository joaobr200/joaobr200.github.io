import NetWork from "../Network";
import LogoSVG from "../../assets/logo.svg";
import * as S from "./styles";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <S.Rodape>
      <a href="/">
        <img src={LogoSVG} alt="Logo" />
      </a>
      <strong>Never stop learning.</strong>
      <NetWork />
      <p>&copy; {year} joaobr200.github.io</p>
      <span>Made with React</span>
    </S.Rodape>
  );
};

export default Footer;
