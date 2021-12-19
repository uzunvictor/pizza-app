import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortBy, setVisibleSort } from '../redux/actions/filters';
import { useSelector } from 'react-redux';

const SortPopup = React.memo(
    function SortPopup({items, activeSortType, onClickSort}) {
    
    //const [visiblePopup, setvisiblePopup] = React.useState(false);
    const visiblePopup = useSelector( ({filters}) => filters.visibleSort )
    const dispatch = useDispatch();
    const onSelectSortType = React.useCallback( (name) => {
        dispatch(setSortBy(name, false));
        // eslint-disable-next-line
    }, [])
    const sortRef = React.useRef();
    
    const toggleVisiblePopup = () => {
        dispatch(setVisibleSort(true))
    };
    const handleOutsideClick = (event) => {
        !event.path.includes(sortRef.current) && dispatch(setVisibleSort(false))
        //for firefox browser
        // const path = event.path || (event.composedPath && event.composedPath());
        //     if (!path.includes(sortRef.current)) {
        //     dispatch(setVisibleSort(false));
    };

    // function selectPopUp(index){
    //     dispatch(set)
    //     setvisiblePopup(false)
    // }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
        //eslint-disable-next-line
    },[])
    
    return (
        // <div ref={(ref) => {sortRef.current = ref}} className="sort">
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <svg
                    className={visiblePopup? 'rotated': ''}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Sort by:</b>
                <span onClick={toggleVisiblePopup}>{activeSortType}</span>
            </div>
            {visiblePopup 
                && <div className="sort__popup">
                    <ul>
                        {items.map((item, index) => (
                    <li 
                        className={activeSortType === item? "active" :''}
                        key={`${item}_${index}`}
                        onClick={() => onSelectSortType(item)}
                    >{item}</li>
                ))}
                        {/* <li onClick={filter} className="active">популярности</li>
                        <li onClick={filter}>цене</li>
                        <li onClick={filter}>алфавиту</li> */} 
                    </ul>
                </div>
            }
        </div>
    )
    
    
    // let filterList = ["популярности", "цене", "алфавиту"];
    // const [state, setState] = React.useState({checked:false, listItem:''});
    
    // console.log(state.listItem);
    // return (
    //     <div className="sort">
    //         <div className="sort__label">
    //             <svg
    //                 width="10"
    //                 height="6"
    //                 viewBox="0 0 10 6"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //             >
    //                 <path
    //                     d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
    //                     fill="#2C2C2C"
    //                 />
    //             </svg>
    //             <b onClick={() => setState({checked: true, listItem: ''})}>Сортировка по:</b>
    //             <span>{state.listItem}</span>
    //         </div>
    //         {state.checked===true 
    //             && <div className="sort__popup">
    //                 <ul>
    //                     {filterList.map( (item, index) => (
    //                         <li onClick={() => setState({checked: false, listItem: item})} key={`${item}_${index}`}>{item}</li>)
    //                         )                        
    //                     }
    //                     {/* <li onClick={filter} className="active">популярности</li>
    //                     <li onClick={filter}>цене</li>
    //                     <li onClick={filter}>алфавиту</li> */} 
    //                 </ul>
    //             </div>
    //         }
    //     </div>
    // )
    
}

)
export default SortPopup;
