export default function(state={}, action) {
    switch(action.type) {
        case "ISSUE_SELECTED":
            return action.payload;
            break;
    }
    return state;
}