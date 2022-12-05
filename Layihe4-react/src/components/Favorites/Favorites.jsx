import React from 'react';
import './Favorites.css';
import {useSelector,useDispatch} from 'react-redux'

function Favorites() {
    let {favourite}=useSelector(function(a){
        return a;
    })
    let dispatch=useDispatch()
    function ItemDeleteHandler(imdbID){
        dispatch({
            type:'delete',
            load:imdbID
        })
    }
    return (
        <div className="favorites">
            Əlavə edilmiş elementlərin sayı : {favourite.length}
             <ul className="favorites__list">
                {favourite.map((item, index) => {
                    return <li className='list-item' key={index}>{item.Title} ({item.Year})
                        <button type="button" onClick={() =>ItemDeleteHandler(item.imdbID)} className="favorites__delete">x</button>
                    </li>
                })}
            </ul>

        </div>
    );
}


export default Favorites;