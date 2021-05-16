import styled from 'styled-components';

export const SearchBar = styled.form`
  border: solid 2px ${props => props.theme.colors.gray};
  display: flex;
  align-items: center;
  height: 3rem;
  border-radius: 1.5rem;
  padding: 0.5rem 0 0.5rem 0.5rem;

  input {
    flex: auto;
  }

  svg {
    margin-right: 0.8rem;
    transition: none;
  }

  > div {
    width: 4rem;
    transform: translateY(0.1rem);
  }

  :focus-within {
    border-color: ${props => props.theme.colors.primary};

    svg {
      stroke: ${props => props.theme.colors.primary};
    }
  }
`
