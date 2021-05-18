import styled from 'styled-components';

export const BookDetails = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0px 4px 8px 0 rgba(0,0,0,0.08);
  margin-bottom: 3rem;
`

export const Header = styled.div`

  @media(min-width: ${props => props.theme.breakpoints.tablet}){
    display: flex;
  }
`

export const ImageColumn = styled.div`
  flex: 2;
  margin: 0 0 2rem 0;

  @media(min-width: ${props => props.theme.breakpoints.tablet}){
    margin: 0 2rem 0 0;
  }
`

export const Details = styled.div`
  flex: 3;
  h1 {
    font-size: 1.4rem;
    margin-bottom: 2rem;

    @media(min-width: ${props => props.theme.breakpoints.tablet}){
      font-size: 1.6rem;
    }
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
