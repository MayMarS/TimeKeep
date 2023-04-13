import './Select.scss';
import Select from 'react-select';
// import makeAnimated from 'react-select/animated';

const optionsCategory = [
    {value: "menWatches", label: "Men's Watches"},
    {value: "womenWatches", label: "Women's Watches"},
    {value: "nemJewelry", label: "Men's Jewelry"},
    {value: "womenJewelry", label: "Women's Jewelry"}
]

const SelectFilters = () => {

    // const [categories, setCategories] = useState([]);

    function customTheme(theme) {
        return{
            ...theme,
            colors:{
                ...theme.colors,
                primary25: '#F5F5F7',
                primary: '#a6a6a6'
            }
        }
    }

    return(
        <Select 
            className="select-item select-category"
            options={optionsCategory}
            placeholder="Category"
            isMulti
            autoFocus
            theme={customTheme}
            // onChange={setCategories}
        />
    )
}

export default SelectFilters;


