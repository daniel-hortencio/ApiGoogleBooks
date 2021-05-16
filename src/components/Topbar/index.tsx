import { useSearchKeyWords } from "contexts/SearchKeyWords";

import Container from "../Container";

import * as S from "./styles";

const Topbar = () => {
  const { searchKeyWords, setSearchKeyWords } = useSearchKeyWords();

  return (
    <S.TopBar>
      <Container>
        <h1>Logo</h1>
      </Container>
    </S.TopBar>
  );
};

export default Topbar;
