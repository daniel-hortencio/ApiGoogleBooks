import styled from 'styled-components';

export const ButtonMyFavorites = styled.a`
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  height: 3rem;
  border-radius: 1.5rem;
  padding: 0.5rem 1rem;
  margin-left: 2rem;

  :hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }

  svg {
    margin-right: 1rem;
    stroke: #fff;
  }

`
