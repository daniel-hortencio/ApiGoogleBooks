import Image from "next/image";

import Text from "components/Text";

import * as S from "./styles";

interface IMessageIllustration {
  image: string;
  title: string;
  subtitle: string;
}

const MessageIllustration = ({
  image,
  title,
  subtitle,
}: IMessageIllustration) => {
  return (
    <S.MessageIllustration>
      <S.ImageContainer>
        <Image width={300} height={200} src={image} layout="responsive" />
      </S.ImageContainer>
      <Text text={title} element="h1" />
      <Text text={subtitle} />
    </S.MessageIllustration>
  );
};

export default MessageIllustration;
