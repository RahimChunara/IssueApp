import {combineReducers} from 'redux';
import Allissues from './issue'

const allReducers = combineReducers({
    allissues: Allissues
});

export default allReducers;
