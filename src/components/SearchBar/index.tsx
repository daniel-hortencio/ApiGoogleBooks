import { IconSearch } from "../Icons";
import Spinner from "../Spinner";

import * as S from "./styles";

interface ISearchBar {
  value: string;
  handleChange: (e) => void;
  isLoading: boolean;
}

const SearchBar = ({ value, handleChange, isLoading }: ISearchBar) => {
  return (
    <S.SearchBar>
      <IconSearch size={28} />
      <input
        type="text"
        placeholder="Digite sua busca"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div>{isLoading && <Spinner />}</div>
    </S.SearchBar>
  );
};

export default SearchBar;
