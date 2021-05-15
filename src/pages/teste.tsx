import { useEffect, useState } from "react";
import { api } from "services/api";

export default function Test() {
  const [results, setResults] = useState<any>();

  async function getBooks() {
    return await api.get(
      `/v1/volumes?q=flowers+inauthor:keyes&key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
  }

  useEffect(() => {
    getBooks()
      .then(({ data }) => {
        setResults(data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Página de teste</h1>
      <h2>Resultados da pesquisa:</h2>

      <ul>
        {results &&
          results.map((book) => (
            <li
              key={book.id}
              style={{
                border: "solid 1px red",
                borderRadius: "1rem",
                marginBottom: "1rem",
                padding: "1rem",
              }}
            >
              {book.volumeInfo.imageLinks?.thumbnail && (
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail || ""}
                  alt="Imagem do produto"
                />
              )}
              <h3>{book.volumeInfo.title}</h3>
              <p>Descrição: {book.volumeInfo.description}</p>
              <p>Data: {book.volumeInfo.publishedDate}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
