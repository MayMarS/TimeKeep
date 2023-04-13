import './Sort.scss';
import { useState, useEffect, useRef } from 'react';

const Sort = ({value, onClickSort}) => {

    const [open, setOpen] = useState(false);
    const popupMenu = [
        {name: "Popular", sortProperty: "rating"},
        {name: "Price: low to high", sortProperty: "-price"},
        {name: "Price: high to low", sortProperty: "price"}
    ]

    const onSelectItem = (index) => {
        onClickSort(index);
        setOpen(false);
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
        <div ref={sortRef} className="sort-div">
            <div className="sort-label" onClick={() => setOpen(!open)}>
                <p>Sort by</p>
                <span>{value.name}</span>
            </div>
            {
                open && (
                    <div className="sort-popup">
                        <ul>
                            {
                                popupMenu.map((obj, i) => (
                                    <li key={i} 
                                    onClick={() => onSelectItem(obj)}
                                    className={value.sortProperty === obj.sortProperty ? 'active-sort' : 'sort'}>
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