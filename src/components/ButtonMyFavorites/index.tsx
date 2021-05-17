import Link from "next/link";

import { IconLike } from "components/Icons";

import * as S from "./styles";

const ButtonMyFavorites = () => {
  return (
    <Link href={"/meus-favoritos"}>
      <S.ButtonMyFavorites>
        <IconLike size={24} /> Meus favoritos
      </S.ButtonMyFavorites>
    </Link>
  );
};

export default ButtonMyFavorites;
