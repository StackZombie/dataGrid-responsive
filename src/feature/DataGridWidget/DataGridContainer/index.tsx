import { DataGrid } from '../DataGrid';
import { columns } from '../utils';
import { Data } from '../../../global/Interfaces';
import { Pagination } from '../../../components/Pagination';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DGState } from '../../../redux-store/reducer';
import {
  nextPageData,
  previousPageData,
  moveToSpecificPage,
} from '../../../redux-store/actions';

const DataGridContainer = () => {
  const currentData = useSelector<DGState, Data[]>(
    (state) => state.currentData
  );

  const totalCount = useSelector<DGState, number>((state) => state.totalCount);

  const [active, setActive] = useState<number>(1);

  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch, active]);

  const movePage = (page: number): void => {
    console.log(page);
    setActive(page);
    dispatch(moveToSpecificPage(page));
  };

  const nextPage = () => {
    setActive(active + 1);
    dispatch(nextPageData());
  };

  const previousPage = () => {
    setActive(active - 1);
    dispatch(previousPageData());
  };

  return (
    <>
      <DataGrid Cols={columns} Rows={currentData} />
      <Pagination
        totalItems={totalCount}
        pageSize={10}
        active={active}
        onSelect={movePage}
        onNextPage={nextPage}
        onPreviousPage={previousPage}
      />
    </>
  );
};

export default DataGridContainer;
