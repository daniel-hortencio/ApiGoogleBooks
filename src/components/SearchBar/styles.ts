import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  align-items: center;
`

export const SearchBar = styled.div`
  flex: auto;

  form {
    border: solid 2px ${props => props.theme.colors.gray};
    display: flex;
    align-items: center;
    height: 3rem;
    border-radius: 1.5rem;
    padding: 0.5rem 0 0.5rem 0.5rem;

    button{
      display: flex;
      align-items: center;
      margin-right: 0.8rem;

      svg {
        transition: stroke 0s, transform 0.3s;
      }
    }

    input {
      flex: auto;
    }

    > div {
      width: 4rem;
      transform: translateY(0.1rem);
    }

    :focus-within {
      border-color: ${props => props.theme.colors.primary};

      svg {
        stroke: ${props => props.theme.colors.secondary};
        transform: rotate(90deg);
      }
    }
  }
`
