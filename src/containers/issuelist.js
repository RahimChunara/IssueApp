import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { userInfo } from 'os';
import {selectIssue} from '../actions/index'; 

class IssueList extends Component {


    createList() {
        return this.props.issues.map((issues) => {
            return (
                <li key={issues.id} onClick={() => this.props.selectIssue(issues)}>{issues.id}) {issues.title}</li>
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

function matchDispatchToProps() {
    return ({selectIssue: selectIssue})
}

export default connect(mapStatetoProps, matchDispatchToProps)(IssueList);
