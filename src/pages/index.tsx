import Head from "next/head";
import { useState } from "react";

import { useSearchKeyWords } from "contexts/SearchKeyWords";
import { findBooks } from "services/ApiFunctions/Book";

import WebsiteTemplate from "templates/Website";
import SearchBar from "components/SearchBar";
import { GridContainer } from "components/GridContainer/styles";
import Card from "../components/Card";
import Text from "components/Text";

export default function Home() {
  const [results, setResults] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { searchKeyWords, setSearchKeyWords } = useSearchKeyWords();
  const [pagination, setPagination] = useState({
    startIndex: 0,
    maxResults: 10,
    total: 0,
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (searchKeyWords) {
      setIsLoading(true);
      findBooks(searchKeyWords)
        .then((data) => {
          console.log(data);
          setResults(data);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));

      return;
    }
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WebsiteTemplate>
        <SearchBar
          value={searchKeyWords}
          handleChange={setSearchKeyWords}
          isLoading={isLoading}
          onSubmit={handleSubmit}
        />
        {results?.totalItems && (
          <Text
            text={`Resultados da pesquisa: ${results.totalItems}`}
            style={{ margin: "1rem 0" }}
          />
        )}

        <GridContainer>
          {results &&
            results.items.map((book) => (
              <Card
                key={book.id}
                id={book.id}
                title={book.volumeInfo.title}
                imageUrl={book.volumeInfo?.imageLinks?.thumbnail}
                description={book.volumeInfo.description}
                publishedDate={book.volumeInfo.publishedDate}
              />
            ))}
        </GridContainer>
      </WebsiteTemplate>
    </>
  );
}
