import { api } from "services/api";

export const findBooks = async (searchKeyWords: string) => {

  return await api.get(
    `/v1/volumes?q=${searchKeyWords}&key=${process.env.NEXT_PUBLIC_API_KEY}`
  ).then(({ data }) => data);

}

export const findBookById = async (id: string) => {

  return await api.get(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.NEXT_PUBLIC_API_KEY}`
  ).then(({ data }) => data);

}

