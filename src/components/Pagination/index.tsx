import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './style.css';
interface Props {
  totalItems: number;
  pageSize: number;
  active: number;
  onSelect(count: number): void;
}

const CustomPagination = ({
  totalItems,
  pageSize,
  onSelect,
  active,
}: Props) => {
  const renderPaginationItems = (): JSX.Element[] => {
    console.log('Active', active);
    const numbers = calculateNumbers();
    console.log('Numbers', numbers);
    const renderElement: JSX.Element[] = [];
    for (let i = 1; i <= numbers; ++i) {
      renderElement.push(
        <PaginationItem active={i === active}>
          <PaginationLink key={i} onClick={() => onSelect(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return renderElement;
  };

  const calculateNumbers = (): number => {
    return Math.ceil(totalItems / pageSize);
  };

  return (
    <div className="pagination-container">
      <Pagination>
        <PaginationItem disabled={active === 1}>
          <PaginationLink href="#" previous />
        </PaginationItem>
        {renderPaginationItems()}
        <PaginationItem>
          <PaginationLink href="#" last />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export { CustomPagination as Pagination };
