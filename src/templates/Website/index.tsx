import * as S from "./styles";

import Topbar from "components/Topbar";

export interface IWebsiteTemplate {
  withSearchBar?: boolean;
  children: React.ReactNode;
}

const WebsiteTemplate = ({
  withSearchBar = false,
  children,
}: IWebsiteTemplate) => {
  return (
    <div>
      <Topbar withSearchBar={withSearchBar} />
      <main></main>
      <footer>Desenvolvido por DaniDev</footer>
    </div>
  );
};

export default WebsiteTemplate;
