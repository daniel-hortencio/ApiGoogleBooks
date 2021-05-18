import React, { useState, useContext, createContext } from "react";

interface ISearchKeyWordsProvider {
  searchKeyWords: string;
  setSearchKeyWords: React.Dispatch<React.SetStateAction<string>>;
  maxResults: number;
}

const SearchKeyWordsContext = createContext({} as ISearchKeyWordsProvider);

export const SearchKeyWordsProvider: React.FC = ({ children }) => {
  const [searchKeyWords, setSearchKeyWords] = useState<string>("");
  const [maxResults, setMaxResults] = useState<number>(20);

  return (
    <SearchKeyWordsContext.Provider
      value={{ searchKeyWords, setSearchKeyWords, maxResults }}
    >
      {children}
    </SearchKeyWordsContext.Provider>
  );
};

export const useSearchKeyWords = () => {
  const context = useContext(SearchKeyWordsContext);

  if (!context)
    throw new Error("useLanguage must be used within a SearchKeyWordsProvider");

  const { searchKeyWords, setSearchKeyWords, maxResults } = context;

  return { searchKeyWords, setSearchKeyWords, maxResults };
};
