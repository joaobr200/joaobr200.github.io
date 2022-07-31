import Logo from "../Ui/Logo";
import NetWork from "../Ui/Network";
import * as S from "./styles";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <S.Rodape>
      <figure>
        <Logo aria-hidden />
      </figure>

      <strong>Never stop learning.</strong>
      <NetWork />
      <a href="/">&copy; {year} joaojustodev.github.io</a>
      <span>Made with React</span>
    </S.Rodape>
  );
};

export default Footer;
