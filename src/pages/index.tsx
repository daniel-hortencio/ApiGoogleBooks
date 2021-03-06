import Head from "next/head";
import { useState } from "react";

import { useSearchKeyWords } from "contexts/Search";
import { useSearchResults } from "contexts/SearchResults";
import { findBooks } from "services/ApiFunctions/Book";

import WebsiteTemplate from "templates/Website";
import SearchBar from "components/SearchBar";
import GridContainer from "components/GridContainer";
import Card from "../components/Card";
import Text from "components/Text";
import Paginator from "components/Paginator";

import MessageIllustration from "components/MessageIllustration";
import { BookDTO } from "services/ApiFunctions/Book/types";

export default function Home() {
  const { results, setResults } = useSearchResults();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    searchKeyWords,
    setSearchKeyWords,
    maxResults,
    paginationCurrent,
    setPaginationCurrent,
  } = useSearchKeyWords();

  function handleSubmit(e) {
    e.preventDefault();

    setPaginationCurrent(1);

    if (searchKeyWords) {
      setIsLoading(true);
      findBooks({ searchKeyWords, maxResults })
        .then((data) => {
          setResults(data);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));

      return;
    } else {
      setResults(null);
      setIsLoading(false);
    }
  }

  const handleChange = (value) => {
    const index = value - 1;

    setPaginationCurrent(value);

    if (searchKeyWords) {
      setIsLoading(true);
      findBooks({ searchKeyWords, startIndex: index * maxResults })
        .then((data) => {
          console.log(data);
          setPaginationCurrent(value);
          setResults(data);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));

      return;
    } else {
      setResults(null);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Leia Mais</title>
        <meta
          name="description"
          content="O que você quer ler agora? Me diga que livro você está procurando e eu trago para você! Sistema de busca de livros integrado à API Google Books"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WebsiteTemplate>
        <SearchBar
          value={searchKeyWords}
          handleChange={setSearchKeyWords}
          isLoading={isLoading}
          onSubmit={handleSubmit}
        />

        {!results && (
          <MessageIllustration
            image="/images/illustrations/welcome.svg"
            title="O que você quer ler agora?"
            subtitle="Me diga que livro você está procurando e eu trago para você!"
          />
        )}

        {results?.totalItems > 0 && (
          <Text
            text={`${results.totalItems} resultado${
              results.totalItems > 1 ? "s" : ""
            } encontrado${results.totalItems > 1 ? "s" : ""}`}
            style={{ margin: "1rem 0" }}
          />
        )}

        {results?.totalItems > maxResults && (
          <Paginator
            current={paginationCurrent}
            pageSize={maxResults}
            onChange={(page) => handleChange(page)}
            total={results?.totalItems}
          />
        )}

        {results && results.totalItems === 0 && (
          <MessageIllustration
            image="/images/illustrations/no-favorites.svg"
            title="Que pena não consegui encontrar o que você buscou!"
            subtitle="Pode ter havido um engano, verifique o que foi digitado e tente novamente."
          />
        )}

        <GridContainer>
          {results &&
            results?.items?.map((book: BookDTO) => (
              <Card
                key={book?.id}
                id={book!.id}
                title={book?.title}
                imageUrl={book?.imageUrl}
                description={book?.description}
                publishedDate={book?.publishedDate}
              />
            ))}
        </GridContainer>
      </WebsiteTemplate>
    </>
  );
}
