export type BookDTO = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  publishedDate: string;
  authors?: string[];
  language?: string;
}

export type SearchResultsDTO = {
  items: Array<BookDTO> | [];
  totalItems: number;
}

export type findBooksDTO = {
  searchKeyWords: string;
  maxResults?: number;
  startIndex?: number;
}
