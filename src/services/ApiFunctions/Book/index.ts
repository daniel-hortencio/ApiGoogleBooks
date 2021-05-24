import { api } from "services/api";
import { BookDTO, SearchResultsDTO, findBooksDTO } from "services/ApiFunctions/Book/types";

export const findBooks = async ({ searchKeyWords, maxResults = 20, startIndex = 0 }: findBooksDTO): Promise<SearchResultsDTO> => {

  return await api.get(
    `/v1/volumes?q=${searchKeyWords}&maxResults=${maxResults}&startIndex=${startIndex}&key=${process.env.NEXT_PUBLIC_API_KEY}`
  ).then(({ data }) => {
    const { totalItems, items } = data

    const results = {
      items: items.map((book) => {
        return {
          id: book.id,
          title: book.volumeInfo.title ? book.volumeInfo.title : "",
          imageUrl: book.volumeInfo.imageLinks?.thumbnail ? book.volumeInfo.imageLinks.thumbnail : "",
          description: book.volumeInfo.description ? book.volumeInfo.description : "",
          publishedDate: book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : "",
        }
      }),
      totalItems
    }
    return results
  });
}

export const findBookById = async (id: string): Promise<Omit<BookDTO, "id">> => {

  return await api.get(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.NEXT_PUBLIC_API_KEY}`
  ).then(({ data }) => {

    const book: Omit<BookDTO, "id"> = {
      title: data.volumeInfo.title ? data.volumeInfo.title : "",
      imageUrl: data.volumeInfo.imageLinks.small ? data.volumeInfo.imageLinks.small : "",
      description: data.volumeInfo.description ? data.volumeInfo.description : "",
      publishedDate: data.volumeInfo.publishedDate ? data.volumeInfo.publishedDate : "",
      authors: data.volumeInfo.authors ? data.volumeInfo.authors : [],
      language: data.volumeInfo.language ? data.volumeInfo.language : "",
    }
    return book
  });
}

