import { api } from "services/api";

type findBooksDTO = {
  searchKeyWords: string;
  maxResults?: number;
  startIndex?: number;
}

export const findBooks = async ({ searchKeyWords, maxResults = 20, startIndex = 0 }: findBooksDTO) => {

  return await api.get(
    `/v1/volumes?q=${searchKeyWords}&maxResults=${maxResults}&startIndex=${startIndex}&key=${process.env.NEXT_PUBLIC_API_KEY}`
  ).then(({ data }) => data);

}

export const findBookById = async (id: string) => {

  return await api.get(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.NEXT_PUBLIC_API_KEY}`
  ).then(({ data }) => data);

}

