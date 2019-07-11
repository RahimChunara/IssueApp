import Allissues from '../reducers/allissues';
import { bindActionCreators } from 'redux';

let issueID = 0

export const addissue = issue => dispatch => (
    {
        type: "ADD_ISSUE",
        id: issueID++,
        issue
    }
)

