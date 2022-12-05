import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import {useSelector} from 'react-redux'
function Movies() {
    let {data}=useSelector(
        function(a){
            return a;
        }
    )
    return (
        <ul className="movies">
            {data.length>0? data.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem {...movie} />
                </li>
            )): "Axtardığınız nəticəyə uyğun heçnə tapılmadı"}
        </ul>
    );

}

export default Movies;