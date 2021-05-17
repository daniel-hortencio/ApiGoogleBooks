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
    color: ${props => props.theme.colors.secondary};

    svg {
      fill: ${props => props.theme.colors.secondary};
    }
  }
`
