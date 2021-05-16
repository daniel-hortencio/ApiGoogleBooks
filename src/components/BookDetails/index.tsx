import Text from "components/Text";
import ImageContainer from "components/ImageContainer";
import {
  IconAuthor,
  IconAuthors,
  IconCalendar,
  IconLanguage,
} from "components/Icons";

import * as S from "./styles";

const BookDetails = ({
  title,
  imageUrl,
  authors,
  publishedDate,
  description,
  language,
}) => {
  return (
    <S.BookDetails>
      <S.Header>
        <ImageContainer imageUrl={imageUrl} />

        <S.Details>
          <Text element="h1" text={title} />

          <S.Row>
            {authors?.length > 1 ? (
              <IconAuthors size={24} />
            ) : (
              <IconAuthor size={24} />
            )}

            {authors && (
              <Text element="span">
                {authors.map((author, index) => {
                  return `${index > 0 ? ", " : ""}${author}`;
                })}
              </Text>
            )}
          </S.Row>

          {publishedDate && (
            <S.Row>
              <IconCalendar size={24} />
              <Text text={publishedDate} element="span" />
            </S.Row>
          )}

          {language && (
            <S.Row>
              <IconLanguage size={24} />
              <Text
                text={language}
                element="span"
                style={{ textTransform: "uppercase" }}
              />
            </S.Row>
          )}
        </S.Details>
      </S.Header>

      <S.Description>
        <Text
          text={"Descrição" || "Sem descrição"}
          style={{ opacity: description ? 1 : 0.4 }}
          element={description ? "h2" : "p"}
        />
        {description && <Text text={description} />}
      </S.Description>
    </S.BookDetails>
  );
};

export default BookDetails;
