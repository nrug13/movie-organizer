import React, { Component } from 'react';
import './MovieItem.css';
import {useDispatch,useSelector} from 'react-redux'
function  MovieItem ({Title, Year, Poster,imdbID}){
    let dispatch=useDispatch();
    let {favourite}=useSelector(function(e){
        return e;
    })
    
        function addFavoriteListAddHanlder(){

            dispatch({
                type:'Fav',
                load:{Title,Year,Poster,imdbID},
            })
            
           
        }
        
        return (
        <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={addFavoriteListAddHanlder}>Добавить в список</button>
                </div>
            </article>
        );
        
}
 
export default MovieItem;