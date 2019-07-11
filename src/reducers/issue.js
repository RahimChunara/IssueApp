export const issue = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TITLE':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title
                }
            ]
        case 'ADD_DESCRIPTION':
            return [
                ...state,
                {
                    id: action.id,
                    description: action.description
                }
            ]
        default:
            return state 
        }
    }
