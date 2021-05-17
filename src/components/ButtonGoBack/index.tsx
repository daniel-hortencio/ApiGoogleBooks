import Link from "next/link";
import { IconArrowLeft } from "components/Icons";

import * as S from "./styles";

const ButtonGoBack = () => {
  return (
    <Link href={`/`}>
      <S.GoBack>
        <IconArrowLeft size={24} /> Voltar
      </S.GoBack>
    </Link>
  );
};

export default ButtonGoBack;
