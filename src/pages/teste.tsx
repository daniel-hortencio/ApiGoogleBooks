import { useEffect, useState } from "react";
import { findBooks } from "services/ApiFunctions/Book";

import { useSearchKeyWords } from "contexts/SearchKeyWords";

export default function Test() {
  const [results, setResults] = useState<any>();

  const { searchKeyWords, setSearchKeyWords } = useSearchKeyWords();

  useEffect(() => {
    findBooks(searchKeyWords)
      .then(({ items }) => {
        console.log(items);
        setResults(items);
      })
      .catch((err) => console.log(err));
  }, [searchKeyWords]);

  return (
    <div>
      <h1>Faça uma pesquisa:</h1>

      <div style={{ border: "solid 1px red" }}>
        <input
          type="text"
          placeholder="Digite sua busca"
          onChange={(e) => setSearchKeyWords(e.target.value)}
        />
      </div>

      <h2>Resultados da pesquisa:</h2>

      <ul style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {results &&
          results.map((book) => (
            <a href={`/livro/${book.id}`}>
              <li
                key={book.id}
                style={{
                  border: "solid 1px red",
                  borderRadius: "1rem",
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                {book.volumeInfo?.imageLinks?.thumbnail && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt="Imagem do produto"
                    width={100}
                    height={100}
                    style={{ objectFit: "contain", border: "solid 1px red" }}
                  />
                )}
                <h3>{book.volumeInfo.title}</h3>
                <p>Descrição: {book.volumeInfo.description}</p>
                <small>Data: {book.volumeInfo.publishedDate}</small>
              </li>
            </a>
          ))}
      </ul>
    </div>
  );
}
