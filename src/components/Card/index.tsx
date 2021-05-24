import { useState } from "react";
import Link from "next/link";

import { IconLike, IconArrowRight } from "../Icons";
import ImageContainer from "components/ImageContainer";
import Text from "../Text";

import { isFavorite } from "utils/isFavorite";

import * as S from "./styles";
import { BookDTO } from "services/ApiFunctions/Book/types";

const Card = ({
  id,
  imageUrl = "",
  title,
  description,
  publishedDate,
}: BookDTO) => {
  const [cardIsFavorite, setCardIsFavorite] = useState<boolean>(isFavorite(id));

  const handleStoreFavorite = (id: string) => {
    let favorites: any[] = [];

    if (localStorage.getItem("@api-google-books/favoritos")) {
      favorites = JSON.parse(
        localStorage.getItem("@api-google-books/favoritos") as string
      );

      if (favorites.some((favorite) => favorite.id === id)) {
        favorites = favorites.filter((favorite) => favorite.id !== id);
        setCardIsFavorite(false);
      } else {
        favorites.push({
          id,
          imageUrl,
          title,
          description,
          publishedDate,
        });
        setCardIsFavorite(true);
      }

      localStorage.setItem(
        "@api-google-books/favoritos",
        JSON.stringify(favorites)
      );
      return;
    } else {
      favorites.push({
        id,
        imageUrl,
        title,
        description,
        publishedDate,
      });
    }

    localStorage.setItem(
      "@api-google-books/favoritos",
      JSON.stringify([
        {
          id,
          imageUrl,
          title,
          description,
          publishedDate,
        },
      ])
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
