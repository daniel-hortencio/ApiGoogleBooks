import styled from 'styled-components';

export const Paginator = styled.div`
  margin-bottom: 2rem;

  .ant-pagination {
    display: flex;
    flex-wrap: wrap;
  }

  .ant-pagination-item,
  .ant-pagination-item-link {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-bottom: 0.5rem;

    a {
      font-weight: 600;
    }
  }

  .ant-pagination-disabled {
    opacity: 0.4;
  }

  .ant-pagination-item-active {
    background-color: ${props => props.theme.colors.primary};
    a {
      color: #fff;
    }
  }
`
