const obj = {
    data: [],
    favourite: [],
    tolist:[],
    inputVal: ''
}
function reducer(state = obj, action) {
    switch (action.type) {
        case 'inputChange':
            return state = {
                ...state,
                inputVal: action.load
            };
        case 'fetchData':
            return state = {
                ...state,
                data: action.load,
                inputVal: ""
            }
            case 'reset':
                return state={
                    ...state,
                    inputVal:"",
                    data:[]
                }

        case 'addtoList':
            let z = state.favourite.filter(
                function (y) {
                    return y.imdbID == action.load.imdbID
                }

            )
           
            if (!z.length) {
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