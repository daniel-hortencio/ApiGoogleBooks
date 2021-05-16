import { IconSearch } from "../Icons";
import Spinner from "../Spinner";

import * as S from "./styles";

interface ISearchBar {
  value: string;
  handleChange: (e) => void;
  onSubmit: (e) => void;
  isLoading: boolean;
}

const SearchBar = ({
  value,
  handleChange,
  onSubmit,
  isLoading,
}: ISearchBar) => {
  return (
    <S.SearchBar>
      <form onSubmit={onSubmit}>
        <button type="submit" disabled={value === ""}>
          <IconSearch size={28} />
        </button>
        <input
          type="text"
          placeholder="Digite sua busca"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
        <div>{isLoading && <Spinner />}</div>
      </form>
    </S.SearchBar>
  );
};

export default SearchBar;
