const obj = {
    data: [],
    favourite: [],
    inputValue: ''
}
function reducer(state = obj, action) {
    switch (action.type) {
        case 'inputChange':
            return state = {
                ...state,
                inputValue: action.load
            };
        case 'fetchData':
            return state = {
                ...state,
                data: action.load,
                inputValue: ""
            }
            case 'reset':
                return state={
                    ...state,
                    inputValue:"",
                    data:[]
                }

        case 'Fav':
            let z = state.favourite.filter(
                function (y) {
                    return y.imdbID == action.load.imdbID
                }

            )
            console.log(z);
            if (z.length == 0) {
                return state = {
                    ...state,
                    favourite: [...state.favourite, action.load]
                }
            }
            else {
                return state
            }
        case 'delete':
            let x = state.favourite.filter(
                function (e) {
                    return e.imdbID != action.load

                }
            )
            return state = {
                ...state,
                favourite: x

            }
        default:
            return state;
    }
}
export { reducer }