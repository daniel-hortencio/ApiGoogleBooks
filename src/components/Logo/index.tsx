import { GiBlackBook } from "react-icons/gi";
import Text from "components/Text";

import * as S from "./styles";

export const Logo = () => {
  return (
    <S.Logo>
      <GiBlackBook size={40} />
      <Text element="strong" text="Leia" />
    </S.Logo>
  );
};

export default Logo;
