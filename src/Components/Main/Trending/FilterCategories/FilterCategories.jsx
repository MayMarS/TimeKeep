import './FilterCategories.scss';

const FilterCategories = ({value, onClickCategory}) => {

    const categories = ["All", "Men's Watches", "Women's Watches", "Men's Jewelry", "Women's Jewelry"];

    return(
        <div className="filters-div">
            {
                categories.map((categoryName, index) => (
                    <button onClick={() => onClickCategory(index)} key={index}
                    className={value === index ? 'active-category' : 'btn-filter'}>
                    {categoryName}
                    </button>
                ))
            }
        </div>
    )
}

export default FilterCategories;