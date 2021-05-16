import * as S from "./styles";

import Topbar from "components/Topbar";
import Container from "components/Container";

export interface IWebsiteTemplate {
  children: React.ReactNode;
}

const WebsiteTemplate = ({ children }: IWebsiteTemplate) => {
  return (
    <S.WebsiteTemplate>
      <Topbar />
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
