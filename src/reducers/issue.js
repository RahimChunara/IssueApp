export default function(state = [], action) {
    //console.log(action.value)
    switch (action.type) {
        case 'ADD_ISSUE':
            return [
                ...state,
                Object.assign({}, action.value)
            ]
            default: 
                return state 
        }
    }

