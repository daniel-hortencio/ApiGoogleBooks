import styled from 'styled-components';

export const ButtonMyFavorites = styled.a`
  background-color: ${props => props.theme.colors.secondary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  border-radius: 1.5rem;
  padding: 0.5rem;
  margin-left: 1rem;

  @media(min-width: 520px) {
    width: initial;
    padding: 0.5rem 1rem;
  }

  @media(min-width: ${props => props.theme.breakpoints.mobileLandscape}) {
    margin-left: 2rem;
  }

  span {
    display: none;
    color: #fff;
    @media(min-width: ${props => props.theme.breakpoints.mobileLandscape}) {
      display: initial;
    }
  }

  :hover {
    background-color: ${props => props.theme.colors.secondaryDark};
  }

  svg {
    stroke: #fff;

    @media(min-width: ${props => props.theme.breakpoints.mobileLandscape}) {
      margin-right: 1rem;
    }
  }

`
