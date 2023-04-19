import './FilterCategories.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../../../../redux/slices/filterSlice';

const categories = ["All", "Men's Watches", "Women's Watches", "Men's Jewelry", "Women's Jewelry"];

const FilterCategories = () => {

    const categoryId = useSelector((state) => state.filter.categoryId);
    const dispatch = useDispatch();
    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    return(
        <div className="filters-div">
            {
                categories.map((categoryName, index) => (
                    <button onClick={() => onChangeCategory(index)} key={index}
                    className={categoryId === index ? 'active-filter' : 'btn-filter'}>
                    {categoryName}
                    </button>
                ))
            }
        </div>
    )
}

export default FilterCategories;