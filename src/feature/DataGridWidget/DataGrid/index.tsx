import { Table, Button, Row } from 'reactstrap';
import { Column } from '../utils';
import { Data } from '../../../global/Interfaces';
import { useState } from 'react';
import { getProperty } from '../utils';
import ConfigurationModal from '../ConfigurationModal';
import './style.css';
interface Props {
  Cols: Column[];
  Rows: Data[];
  delCol(key: string): void;
  addCol(column: Column): void;
}
const renderColumns = (columns: Column[]): JSX.Element[] => {
  return columns.map(({ label, key }) => {
    return <th key={key}>{label}</th>;
  });
};

const renderRows = (rows: Data[] | any[], cols: Column[]) => {
  return rows.map((row, index) => {
    return (
      <tr key={index}>
        {cols.map((col, cindex) => {
          return (
            <>
              <td>{getProperty(row, col.key)}</td>
            </>
          );
        })}
      </tr>
    );
  });
};

const DataGrid = ({ Cols, Rows, delCol, addCol }: Props) => {
  const [modal, setModal] = useState<boolean>(false);
  const toggleConfigModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <ConfigurationModal
        Cols={Cols}
        modal={modal}
        toggleModal={toggleConfigModal}
        deleteColumn={delCol}
        addColumn={addCol}
      />
      <h3 className="text-center my-2">Data Grid</h3>
      <Button
        className="btn btn-md btn-warning my-2 mx-4"
        onClick={toggleConfigModal}
      >
        {' '}
        Configure{' '}
      </Button>
      <Table style={{ height: '500px' }} bordered size="md">
        <thead>
          <tr>{renderColumns(Cols)}</tr>
        </thead>
        <tbody>{renderRows(Rows, Cols)}</tbody>
      </Table>
    </div>
  );
};

export { DataGrid };
