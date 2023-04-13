import './Pagination.scss';
import ReactPaginate from "react-paginate";

const Pagination = ({onChangePage}) => {
    return(
        <ReactPaginate className="pagination-div"
        breakLabel="..."
        previousLabel="<"
        nextLabel=">"
        onPageChange={event => onChangePage(event.selected+1)}
        pageRangeDisplayed={8}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    )
}

export default Pagination;