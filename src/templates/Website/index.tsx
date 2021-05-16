import * as S from "./styles";

import Topbar from "components/Topbar";
import Container from "components/Container";

export interface IWebsiteTemplate {
  withSearchBar?: boolean;
  children: React.ReactNode;
}

const WebsiteTemplate = ({
  withSearchBar = false,
  children,
}: IWebsiteTemplate) => {
  return (
    <S.WebsiteTemplate>
      <Topbar withSearchBar={withSearchBar} />
      <main>
        <Container>{children}</Container>
      </main>
      <footer>
        <Container>Desenvolvido por DaniDev</Container>
      </footer>
    </S.WebsiteTemplate>
  );
};

export default WebsiteTemplate;
