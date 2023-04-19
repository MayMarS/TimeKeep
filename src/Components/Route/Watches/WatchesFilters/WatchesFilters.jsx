import './WatchesFilters.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setGender } from '../../../../redux/slices/filterSlice';

const genderList = ["All", "Men", "Women"];

const WatchesFilters = () => {

    const gender = useSelector((state) => state.filter.gender);
    console.log(gender);

    const dispatch = useDispatch();
    const onChangeGender = (id) => {
        dispatch(setGender(id))
    }

    return(
        <div className="filters-div">
            {
                genderList.map((genderName, index) => (
                    <button onClick={() => onChangeGender(index)} key={index}
                    className={gender === index ? 'active-filter' : 'btn-filter'}>
                    {genderName}
                    </button>
                ))
            }
        </div>
    )
}

export default WatchesFilters;