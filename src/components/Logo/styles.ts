import styled from 'styled-components'

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  svg, strong {
    color: #fff;
    fill: #fff;
  }

  svg {
    margin-right: 0.5rem;
    fill: ${props => props.theme.colors.secondary};
  }

  strong {
    font-size: 2.4rem;
    font-weight: 900;

    ::after {
      content:"+";
      color: ${props => props.theme.colors.secondary};
    }
  }
`
