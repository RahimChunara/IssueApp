import update from 'react-addons-update';

const initialState = {
    issues: [],
    loading: false,
};

export default function(state = initialState, action) {
    //console.log(action.value)

    
    switch (action.type) {
        case 'GET_ISSUE':
            return {
                ...state,
                issues: action.payload,
                loading: false
            }
        case 'ADD_ISSUE':
            return {
                ...state,
                issues: [action.payload, ...state.issues]
            }
        case 'CHANGE_STATUS':
            var index = state.issues.findIndex(function(item, i){
                return item._id === action.payload._id
            });
            return update(state, { 
                issues: { 
                    [index]: {
                        status: {$set: 'CLOSED'}
                    }
                  }
                });
        case 'LOADING_ISSUE':
        default: 
            return {
                ...state,
                loading: true
            } 
        }
    }

