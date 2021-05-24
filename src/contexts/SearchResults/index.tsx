import React, { useState, useContext, createContext } from "react";
import { SearchResultsDTO } from "services/ApiFunctions/Book/types";

interface ISearchResultsProvider {
  results: any;
  setResults: React.Dispatch<any>;
}

const SearchResultsContext = createContext({} as ISearchResultsProvider);

export const SearchResultsProvider: React.FC = ({ children }) => {
  const [results, setResults] = useState<SearchResultsDTO>();

  return (
    <SearchResultsContext.Provider value={{ results, setResults }}>
      {children}
    </SearchResultsContext.Provider>
  );
};

export const useSearchResults = () => {
  const context = useContext(SearchResultsContext);

  if (!context)
    throw new Error("useLanguage must be used within a SearchResultsProvider");

  const { results, setResults } = context;

  return { results, setResults };
};
