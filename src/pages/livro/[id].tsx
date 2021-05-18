import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { findBookById } from "services/ApiFunctions/Book";
import MessageIllustration from "components/MessageIllustration";

import WebsiteTemplate from "templates/Website";
import BookDetails from "components/BookDetails";
import ButtonGoBack from "components/ButtonGoBack";

const Livro = () => {
  const [book, setBook] = useState<any>();
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    findBookById(id as string)
      .then((data) => setBook(data.volumeInfo))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(book);

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

export default Livro;
