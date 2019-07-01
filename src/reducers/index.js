import {combineReducers} from 'redux';
import Allissues from './allissues';

const allissues = combineReducers({
    issues: Allissues
});

export default allissues;
