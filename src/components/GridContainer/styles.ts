import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 3rem;

  @media(min-width: ${props => props.theme.breakpoints.mobileLandscape}){
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media(min-width: ${props => props.theme.breakpoints.tabletLs}){
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media(min-width: ${props => props.theme.breakpoints.notebookLs}){
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

`
