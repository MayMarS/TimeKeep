import './Sort.scss';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortMenu, setSortOpen, setSortType } from '../../../../redux/slices/filterSlice';

const Sort = () => {

    const sort = useSelector((state) => state.filter.sort);
    const dispatch = useDispatch();

    const onMenuOpen = (obj) => {
        dispatch(setSortOpen(obj));
    }

    const onSelectItem = (obj) => {
        dispatch(setSortType(obj));
        setSortOpen(false);
    }

    const sortRef = useRef();
    // useEffect(() => {
    //     document.body.addEventListener('click', (event) => {
    //         console.log(event);
    //         if(!event.path.includes(sortRef.current)) {
    //             setOpen(false);
    //         }
    //     })
    // }, [])

    return(
        <div ref={sortRef} className="sort-div sort-category">
            <div className="sort-label" onClick={() => onMenuOpen(!sort.open)}>
                <p>Sort by</p>
                <span>{sort.name}</span>
            </div>
            {
                sort.open && (
                    <div className="sort-popup">
                        <ul>
                            {
                                sortMenu.map((obj, i) => (
                                    <li key={i} 
                                    onClick={() => onSelectItem(obj)}
                                    className={sort.sortProperty === obj.sortProperty ? 'active-sort' : 'sort'}>
                                    {obj.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default Sort;