import { api } from "services/api";

export const getBooks = async (searchKeyWords: string) => {

  return await api.get(
    `/v1/volumes?q=${searchKeyWords}&key=${process.env.NEXT_PUBLIC_API_KEY}`
  ).then(({ data }) => data);

}
