import { useState } from "react";
import Link from "next/link";

import { IconLike, IconArrowRight } from "../Icons";
import ImageContainer from "components/ImageContainer";
import Text from "../Text";

import { isFavorite } from "utils/isFavorite";

import * as S from "./styles";

interface ICard {
  id: string;
  imageUrl: string | undefined;
  title: string;
  description: string;
  publishedDate: string;
}

const Card = ({
  id,
  imageUrl = "",
  title,
  description,
  publishedDate,
}: ICard) => {
  const [cardIsFavorite, setCardIsFavorite] = useState<boolean>(isFavorite(id));

  const handleStoreFavorite = (id: string) => {
    let favorites: string[] = [];

    if (localStorage.getItem("@api-google-books/favoritos")) {
      favorites = JSON.parse(
        localStorage.getItem("@api-google-books/favoritos") as string
      );

      if (favorites.includes(id)) {
        favorites = favorites.filter((favorite) => favorite !== id);
        setCardIsFavorite(false);
      } else {
        favorites.push(id);
        setCardIsFavorite(true);
      }

      localStorage.setItem(
        "@api-google-books/favoritos",
        JSON.stringify(favorites)
      );
      return;
    } else {
      favorites.push(id);
    }

    localStorage.setItem(
      "@api-google-books/favoritos",
      JSON.stringify(favorites)
    );
    setCardIsFavorite(true);
  };

  return (
    <S.Card>
      <ImageContainer imageUrl={imageUrl} />

      <S.Row>
        <S.ButtonLike
          isFavorite={cardIsFavorite}
          onClick={() => handleStoreFavorite(id)}
        >
          <IconLike size={24} />
        </S.ButtonLike>
        {publishedDate && (
          <Text element="small" text={publishedDate || "Sem data"} />
        )}
      </S.Row>

      <S.Details>
        <Text element="h3" text={title} limit={2} />
        <Text
          text={description || "Sem descrição"}
          limit={3}
          style={{ opacity: description ? 1 : 0.5 }}
        />
        <footer>
          <Link href={`/livro/${id}`}>
            <a href={`/livro/${id}`}>
              Ver mais <IconArrowRight size={24} />
            </a>
          </Link>
        </footer>
      </S.Details>
    </S.Card>
  );
};

export default Card;
