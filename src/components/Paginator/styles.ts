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
    margin: 0 1rem 1rem 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-bottom: 0.5rem;
    background-color: #fff;

    a {
      font-weight: 600;
      font-size: 0.8rem;
    }
  }

  .ant-pagination-disabled {
    opacity: 0.4;
    cursor: initial;
  }

  .ant-pagination-item-active {
    background-color: ${props => props.theme.colors.primary};
    a {
      color: #fff;
    }
  }

  .ant-pagination-item-ellipsis {
    display: none;
  }

  .anticon {
    transform: scale(0.8)
  }
`
