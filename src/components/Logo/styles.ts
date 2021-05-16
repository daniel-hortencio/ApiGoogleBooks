import styled from 'styled-components'

export const Logo = styled.div`
  display: flex;
  align-items:center;

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
