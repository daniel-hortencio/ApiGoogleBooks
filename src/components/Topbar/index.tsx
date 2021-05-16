import { useSearchKeyWords } from "contexts/SearchKeyWords";
import { IWebsiteTemplate } from "templates/Website";

import Container from "../Container";

import * as S from "./styles";

const Topbar = ({ withSearchBar }: Omit<IWebsiteTemplate, "children">) => {
  const { searchKeyWords, setSearchKeyWords } = useSearchKeyWords();

  return (
    <S.TopBar>
      <Container>
        <h1>Logo</h1>

        {withSearchBar && (
          <div style={{ border: "solid 1px gray" }}>
            <input
              type="text"
              placeholder="Digite sua busca"
              value={searchKeyWords}
              onChange={(e) => setSearchKeyWords(e.target.value)}
            />
          </div>
        )}
      </Container>
    </S.TopBar>
  );
};

export default Topbar;
