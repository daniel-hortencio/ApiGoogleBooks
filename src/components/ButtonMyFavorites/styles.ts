import styled from 'styled-components';

export const ButtonMyFavorites = styled.a`
  background-color: ${props => props.theme.colors.secondary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 11rem;
  border-radius: 1.5rem;
  padding: 0.5rem;
  margin: 0 0 1rem 0;

  @media(min-width: ${props => props.theme.breakpoints.tablet}){
    margin: 0 1rem 0 0;
  }

  @media(min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-left: 1rem;
  }

  span {
    color: #fff;
  }

  :hover {
    background-color: ${props => props.theme.colors.secondaryDark};
  }

  svg {
    stroke: #fff;
      margin-right: 1rem;
  }

`
