import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import { addTitle } from '../actions/index';
// import { userInfo } from 'os';

class IssueList extends Component {
    
    createList() {
        return this.props.issues.map((issues) => {
            return (
                <li key={issues.id}>{issues.id}) {issues.title}</li>
            )
        })
    }
    render() {
        return (
            <ul>
                {this.createList()}
            </ul>
        );
    }
}

function mapStatetoProps(state) {
    return {
        issues: state.issues
    };
}

// const matchDispatchToProps = (dispatch) => {
//     return bindActionCreators({addTitle: addTitle, dispatch})
// }

export default connect(mapStatetoProps)(IssueList);
