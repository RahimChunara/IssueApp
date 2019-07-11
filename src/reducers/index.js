import {combineReducers, createStore} from 'redux';
import Allissues from './allissues';
import { issue } from './issue'

const allissues = combineReducers({
    issue
});


export default allissues;
