const issue = (state = [], action) => {
    console.log(action.value)
    switch (action.type) {
        case 'ADD_ISSUE':
            return [
                ...state,
                {
                id: action.id,
                value: action.value
                }
            ]
            default: 
                return state 
        }
    }

export default issue;