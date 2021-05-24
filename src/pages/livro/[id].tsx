import Head from "next/head";
import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { findBookById } from "services/ApiFunctions/Book";
import { BookDTO } from "services/ApiFunctions/Book/types";

import MessageIllustration from "components/MessageIllustration";
import WebsiteTemplate from "templates/Website";
import BookDetails from "components/BookDetails";
import ButtonGoBack from "components/ButtonGoBack";

const Livro = ({ bookInfo }) => {
  const [book, setBook] = useState<BookDTO | undefined>(undefined);

  useEffect(() => {
    setBook(bookInfo);
  }, [bookInfo]);

  return (
    <>
      <Head>
        <title>Leia Mais | {book?.title}</title>
        <meta name="description" content={book?.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WebsiteTemplate>
        <ButtonGoBack />
        {book ? (
          <BookDetails
            title={book.title}
            publishedDate={book.publishedDate}
            imageUrl={book.imageUrl}
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
    </>
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

  const bookInfo = await findBookById(id as string)
    .then((book) => book)
    .catch((err) => console.log(err));

  return {
    props: {
      bookInfo,
    },
    revalidate: 60 * 60 * 24, // 1 dia
  };
};

export default Livro;
