import styled from 'styled-components';

export const GoBack = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 1rem;

  svg {
    transition: none;
    margin-right: 1rem;
  }

  :hover {
    color: ${props => props.theme.colors.primary};

    svg {
      fill: ${props => props.theme.colors.primary};
    }
  }
`

export const BookDetails = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0px 1px 20px 0 rgba(0,0,0,0.15);
`

export const Header = styled.div`
 display: grid;
  grid-template-columns: 30rem 1fr;
  gap: 2rem;
`

export const ImageContainer = styled.div`
  margin-right: 2rem;

`

export const Details = styled.div`
  h1 {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  svg {
    margin-right: 1rem;
  }
`

export const Description = styled.div`
  margin-top: 2rem;
  border-top: solid 1px ${props => props.theme.colors.grayLight};
  padding-top: 1rem;

  h2 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

`
