import { Table } from 'reactstrap';
import { Column } from '../utils';
import { Data } from '../../../Global/Interfaces';

interface Props {
  Cols: Column[];
  Rows: Data[];
}
const renderColumns = (columns: Column[]): JSX.Element[] => {
  return columns.map(({ label, key }) => {
    return <th key={key}>{label}</th>;
  });
};

const renderRows = (rows: Data[]) => {
  return rows.map((row, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{row.name}</td>
        <td>{row.date}</td>
        <td>{row.category}</td>
        <td>{row.amount}</td>
        <td>{row.created_at}</td>
      </tr>
    );
  });
};

const DataGrid = ({ Cols, Rows }: Props) => {
  return (
    <div>
      <h3>Data Grid</h3>
      <Table bordered size="sm">
        <thead>
          <tr>{renderColumns(Cols)}</tr>
        </thead>
        <tbody>{renderRows(Rows)}</tbody>
      </Table>
    </div>
  );
};

export { DataGrid };
