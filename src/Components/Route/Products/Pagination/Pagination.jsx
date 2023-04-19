import './Pagination.scss';
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../../../redux/slices/filterSlice';

const Pagination = () => {

    const currentPage = useSelector((state) => state.filter.currentPage);
    const dispatch = useDispatch();
    const onChangePage = (number) => {
        dispatch(setCurrentPage(number));
    }

    return(
        <ReactPaginate className="pagination-div"
        breakLabel="..."
        previousLabel="<"
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected+1)}
        pageRangeDisplayed={12}
        pageCount={4}
        forcePage={currentPage-1}
        renderOnZeroPageCount={null}
      />
    )
}

export default Pagination;