import { IconBook } from "../Icons";

import * as S from "./styles";

interface IImageContainer {
  imageUrl: string | undefined;
}

const ImageContainer = ({ imageUrl = "" }: IImageContainer) => {
  return (
    <S.ImageContainer>
      {imageUrl ? (
        <img src={imageUrl} alt="Imagem do livro" />
      ) : (
        <IconBook size={28} />
      )}
    </S.ImageContainer>
  );
};

export default ImageContainer;
