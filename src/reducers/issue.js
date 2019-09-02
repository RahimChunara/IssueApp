export default function(state = [], action) {
    //console.log(action.value)
    switch (action.type) {
        case 'ADD_ISSUE':
            return [
                ...state,
                Object.assign({}, action.payload)
            ]
        case 'CHANGE_STATUS':
            return [
                ...state.map(issue => Object.assign({}, issue, { status: 'CLOSED' })),
                ...state.filter(issue => issue.id === action.id)
            ]
            default: 
                return state 
        }
    }

