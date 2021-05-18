import { Pagination } from "antd";

import * as S from "./styles";

interface IPaginator {
  pageSize: number;
  onChange: ((page: number, pageSize?: number | undefined) => void) | undefined;
  total: number;
  current: number;
}

const Paginator = ({ pageSize, onChange, total, current }: IPaginator) => {
  return (
    <S.Paginator>
      <Pagination
        current={current}
        pageSize={pageSize}
        onChange={onChange}
        total={total}
        showSizeChanger={false}
      />
    </S.Paginator>
  );
};

export default Paginator;
