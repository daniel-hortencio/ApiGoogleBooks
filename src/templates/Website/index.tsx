import * as S from "./styles";

import Topbar from "components/Topbar";
import Container from "components/Container";
import Text from "components/Text";

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
        <Container>
          <Text text="Desenvolvido por DaniDev - © Copyright 2021." />
        </Container>
      </footer>
    </S.WebsiteTemplate>
  );
};

export default WebsiteTemplate;
