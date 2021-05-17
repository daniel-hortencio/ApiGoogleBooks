import styled from 'styled-components';

export const TopBar = styled.header`
  background: ${props => props.theme.colors.primary};
  position: fixed;
  width: 100%;
  z-index: 3;

  > div {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    @media(min-width: ${props => props.theme.breakpoints.mobileLandscape}){
      padding: auto;
    }
  }
`
