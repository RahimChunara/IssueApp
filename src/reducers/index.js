import {combineReducers} from 'redux';
import Allissues from './allissues';
import ActiveIssue from '../reducers/activeissues';

const allissues = combineReducers({
    issues: Allissues,
    activeIssue: ActiveIssue
});

export default allissues;
