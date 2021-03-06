import styled from 'styled-components';

export const WebsiteTemplate = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  > main {
    padding-top: 6rem;
    flex: auto;
  }

  > footer {
    background-color: ${props => props.theme.colors.primary};

    p {
      color: #fff;
      text-align: center;
    }
  }
`
