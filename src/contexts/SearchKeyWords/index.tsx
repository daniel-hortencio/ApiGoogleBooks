import React, { useState, useContext, createContext } from "react";

interface ISearchKeyWordsProvider {
  searchKeyWords: string;
  setSearchKeyWords: React.Dispatch<React.SetStateAction<string>>;
}

const SearchKeyWordsContext = createContext({} as ISearchKeyWordsProvider);

export const SearchKeyWordsProvider: React.FC = ({ children }) => {
  const [searchKeyWords, setSearchKeyWords] = useState<string>("");

  return (
    <SearchKeyWordsContext.Provider
      value={{ searchKeyWords, setSearchKeyWords }}
    >
      {children}
    </SearchKeyWordsContext.Provider>
  );
};

export const useSearchKeyWords = () => {
  const context = useContext(SearchKeyWordsContext);

  if (!context)
    throw new Error("useLanguage must be used within a GridOrListProvider");

  const { searchKeyWords, setSearchKeyWords } = context;

  return { searchKeyWords, setSearchKeyWords };
};
