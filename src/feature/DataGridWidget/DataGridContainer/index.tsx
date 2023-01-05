import { DataGrid } from '../DataGrid';
import { columns } from '../utils';
import { Data } from '../../../Global/Interfaces';
import { Pagination } from '../../../components/Pagination';

import { useEffect, useState } from 'react';
import axios from 'axios';
const DataGridContainer = () => {
  const [data, setData] = useState<Data[]>([]);
  const makeApiCall = async () => {
    try {
      const response = await axios(
        'https://us-central1-fir-apps-services.cloudfunctions.net/transactions'
      );
      const { data: responseData } = response.data;
      console.log('Response', responseData);
      setData([...responseData]);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    makeApiCall();
  }, []);

  const changePage = (count: number): void => {
    console.log('Count', count);
  };
  return (
    <>
      <h1>Data Grid Widget</h1> <DataGrid Cols={columns} Rows={data} />
      <Pagination
        totalItems={137}
        pageSize={10}
        active={1}
        onSelect={changePage}
      />
    </>
  );
};

export default DataGridContainer;
