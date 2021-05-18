import React, { useState, useContext, createContext } from "react";

interface ISearchProvider {
  searchKeyWords: string;
  setSearchKeyWords: React.Dispatch<React.SetStateAction<string>>;
  maxResults: number;
  paginationCurrent: number;
  setPaginationCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const SearchContext = createContext({} as ISearchProvider);

export const SearchProvider: React.FC = ({ children }) => {
  const [searchKeyWords, setSearchKeyWords] = useState<string>("");
  const [maxResults, setMaxResults] = useState<number>(20);
  const [paginationCurrent, setPaginationCurrent] = useState<number>(1);

  return (
    <SearchContext.Provider
      value={{
        searchKeyWords,
        setSearchKeyWords,
        maxResults,
        paginationCurrent,
        setPaginationCurrent,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchKeyWords = () => {
  const context = useContext(SearchContext);

  if (!context)
    throw new Error("useLanguage must be used within a SearchKeyWordsProvider");

  const {
    searchKeyWords,
    setSearchKeyWords,
    maxResults,
    paginationCurrent,
    setPaginationCurrent,
  } = context;

  return {
    searchKeyWords,
    setSearchKeyWords,
    maxResults,
    paginationCurrent,
    setPaginationCurrent,
  };
};
