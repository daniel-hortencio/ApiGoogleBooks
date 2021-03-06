import Head from "next/head";
import { useEffect, useState } from "react";

import { useSearchKeyWords } from "contexts/Search";
import { IconLike } from "components/Icons";

import WebsiteTemplate from "templates/Website";
import { GridContainer } from "components/GridContainer/styles";
import Card from "../components/Card";
import Text from "components/Text";
import MessageIllustration from "components/MessageIllustration";

import ButtonGoBack from "components/ButtonGoBack";

export default function Home() {
  const [results, setResults] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { searchKeyWords, setSearchKeyWords } = useSearchKeyWords();
  const [pagination, setPagination] = useState({
    startIndex: 0,
    maxResults: 10,
    total: 0,
  });

  useEffect(() => {
    let favorites = JSON.parse(
      localStorage.getItem("@api-google-books/favoritos") as string
    );

    setResults(favorites);
  }, []);

  return (
    <>
      <Head>
        <title>Leia Mais | Favoritos</title>
        <meta
          name="description"
          content="Seus favoritos da Api Google Book. Busque pelos seus livros preferidos, clique no botão de like e o livro será guardado como favorito. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WebsiteTemplate>
        <ButtonGoBack />
        <Text
          element="h1"
          style={{
            margin: "2rem 0",
            display: "flex",
            alignItems: "center",
            fontSize: "1.4rem",
          }}
        >
          <IconLike size={24} style={{ marginRight: "1rem" }} /> Meus favoritos
        </Text>

        {results && results.length > 0 ? (
          <GridContainer>
            {results?.map((book) => (
              <Card
                key={book.id}
                id={book.id}
                title={book.title}
                imageUrl={book.imageUrl}
                description={book.description}
                publishedDate={book.publishedDate}
              />
            ))}
          </GridContainer>
        ) : (
          <MessageIllustration
            image="/images/illustrations/no-favorites.svg"
            title="Que pena, acho que você ainda não tem favoritos!"
            subtitle="Busque pelos seus livros preferidos, clique no botão de like e o livro será guardado como favorito."
          />
        )}
      </WebsiteTemplate>
    </>
  );
}
