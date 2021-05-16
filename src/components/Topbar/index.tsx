import { useSearchKeyWords } from "contexts/SearchKeyWords";

import Container from "components/Container";
import Logo from "components/Logo";

import * as S from "./styles";

const Topbar = () => {
  return (
    <S.TopBar>
      <Container>
        <Logo />
      </Container>
    </S.TopBar>
  );
};

export default Topbar;
