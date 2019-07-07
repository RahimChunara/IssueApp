import {combineReducers, createStore} from 'redux';
import Allissues from './allissues';
//import { bindActionCreators } from 'redux';
// import ActiveIssue from '../reducers/activeissues';
//const store = createStore(Allissues)

const allissues = combineReducers({
    issues: Allissues,
    // activeIssue: ActiveIssue
});


export default allissues;
