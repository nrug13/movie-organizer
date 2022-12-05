import React, { Component, useEffect } from 'react';
import './SearchBox.css';
import { useSelector,useDispatch } from 'react-redux'
import mystore from '../../redux/store';
function SearchBox() {
    const {inputValue} = useSelector(
        function (state) {
            
            return state;
        }
    )
    
    useEffect(
        function () {
            async function fetchData() {
                let response = await fetch(`http://www.omdbapi.com/?s=joker&apikey=9ad2bb5d`);
                let js=await response.json();
                console.log(js)
                if(js.Response=='True'){
                    dispatch({
                        type:'fetchData',
                        load:js.Search
                    })
                    
                }
                else if(js.Response=='False'){
                    dispatch({
                        type:'reset',
                        
                    })
                }
            }
            fetchData()
        }, []
        
    )
    let dispatch=useDispatch();
    let searchLineChangeHandler = (e) => {
        dispatch(
            {
                type:'inputChange',
                load:e.target.value
            }
        )
    }
    let searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        async function fetchData() {
            let response = await fetch(`http://www.omdbapi.com/?s=${inputValue}&apikey=9ad2bb5d`);
            let js=await response.json();
            console.log(js)
            if(js.Response=='True'){
                dispatch({
                    type:'fetchData',
                    load:js.Search
                })
                
            }
            else if(js.Response=='False'){
                dispatch({
                    type:'reset',
                    
                })
            }
        }
        fetchData();
    }

    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                         value={inputValue}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                 disabled={!inputValue}
                >
                    Искать
                </button>
            </form>
        </div>
    );

}

export default SearchBox;


