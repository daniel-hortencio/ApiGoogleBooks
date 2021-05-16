import Link from "next/link";

import { IconBook, IconLike, IconArrowRight } from "../Icons";
import Text from "../Text";

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
  return (
    <S.Card>
      <S.ImageContainer>
        {imageUrl ? (
          <img src={imageUrl} alt="Imagem do livro" />
        ) : (
          <IconBook size={28} />
        )}
      </S.ImageContainer>

      <S.Row>
        <button>
          <IconLike size={24} />
        </button>
        {publishedDate && (
          <Text element="small" text={publishedDate || "Sem data"} />
        )}
      </S.Row>

      <S.Details>
        <Text element="h3" text={title} limit={2} />
        <Text text={description || "Sem descrição"} limit={3} />
        <footer>
          <Link href={`/livro/${id}`}>
            <a>
              Ver mais <IconArrowRight size={24} />
            </a>
          </Link>
        </footer>
      </S.Details>
    </S.Card>
  );
};

export default Card;
