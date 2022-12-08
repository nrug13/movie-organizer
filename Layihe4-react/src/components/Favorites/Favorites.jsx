import React from 'react';
import './Favorites.css';
import { useSelector, useDispatch } from 'react-redux'

function Favorites() {
    let { favourite: list } = useSelector(function (a) {
        return a;
    })

    let dispatch = useDispatch()
    function ItemDeleteHandler(imdbID) {
        dispatch({
            type: 'delete',
            load: imdbID
        })

    }
    // let arr = []
    // function aa() {
    //     list.forEach(element => {
    //         arr.push(element.Title)
    //     });
    //     console.log(arr)
    // }
    // console.log(arr)
    // function Ee() {
        
    //     return (
    //         <div>
    //             filmler{
    //             <ul className="movies">
    //         {arr.length>0? arr.map((movie) => (
    //             <li className="movies__item" key={movie.imdbID}>
    //                 {movie.Title}
    //             </li>
    //         )): false}
    //     </ul>
    //         }</div>
    //     );
    // }



    return (
        <div className="favorites">
            Əlavə edilmiş elementlərin sayı : {list.length}
            <ul className="favorites__list">
                {list.map((item, index) => {
                    return <li className='list-item' key={index}>{item.Title} ({item.Year})
                        <button type="button" onClick={() => ItemDeleteHandler(item.imdbID)} className="favorites__delete">x</button>
                    </li>
                })}
            </ul>
            <label htmlFor="">
                <input type="text" />
                <button type='button'
                    // onClick={
                    //     aa
                    // }

                >Siyahı yarat
                    
                </button>
                {/* <Ee /> */}
                
            </label>

        </div>
    );
}


export default Favorites;