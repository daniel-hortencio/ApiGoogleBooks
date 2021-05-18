import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

import { findBookById } from "services/ApiFunctions/Book";
import MessageIllustration from "components/MessageIllustration";

import WebsiteTemplate from "templates/Website";
import BookDetails from "components/BookDetails";
import ButtonGoBack from "components/ButtonGoBack";

const Livro = ({ volumeInfo }) => {
  const [book, setBook] = useState<any>();

  useEffect(() => {
    setBook(volumeInfo);
  }, [volumeInfo]);

  return (
    <WebsiteTemplate>
      <ButtonGoBack />
      {book ? (
        <BookDetails
          title={book.title}
          publishedDate={book.publishedDate}
          imageUrl={book.imageLinks.small}
          authors={book.authors}
          description={book.description}
          language={book.language}
        />
      ) : (
        <MessageIllustration
          image="/images/illustrations/no-favorites.svg"
          title="Sinto muito, esse livro não foi encontrado!"
          subtitle="O link do livro pode estar errado ou pode ter sido removido pelo autor"
        />
      )}
    </WebsiteTemplate>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as any;

  const volumeInfo = await findBookById(id as string)
    .then((data) => data.volumeInfo)
    .catch((err) => console.log(err));

  return {
    props: {
      volumeInfo,
    },
    revalidate: 60 * 60 * 24, // 1 dia
  };
};

export default Livro;
