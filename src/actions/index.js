import Allissues from '../reducers/allissues';
import { bindActionCreators } from 'redux';
import { createStore } from 'redux';

const store = createStore(Allissues, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const addid = id => (
    {
        type: "ADD_ID",
        payload: id
    }
)
const addTitle = title => (
    {
        type: "ADD_TITLE",
        payload: title
    }
)

const addDesc = description => (
    {
        type: "ADD_DESCRIPTION",
        payload: description
    }
)

export const actionCreators = bindActionCreators(
    {
        addid,
        addTitle,
        addDesc
    },
    store.dispatch
);
