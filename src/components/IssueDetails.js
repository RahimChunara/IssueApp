import React, { Component } from 'react';
import { connect } from 'react-redux';
import {issueStatus} from '../actions/index';
import { bindActionCreators } from 'redux';



class IssueDetails extends Component {

    render() {
        return (
            <ul>
                {
                    this.props.issue.map((issue) => {
                        if (this.props.match.params.id == issue.id) {
                            return (
                                <div>
                                    <h1> Title : {issue.title} </h1>
                                    <h2> Description : {issue.description} </h2>
                                    <h3> Status: {issue.status} </h3>
                                    <button onClick={() => { if (window.confirm('Are you sure you wish to close the issue?')) this.props.issueStatus(issue) }}> Close Issue </button>
                                </div>
                            )
                        }
                    }
                    )
                }
            </ul>
        );
    }
}

function mapStatetoProps(state) {
    return {
        issue: state.allissues
    };
}

function mapDispatchtoProps(dispatch) {
    return bindActionCreators({ issueStatus: issueStatus }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchtoProps)(IssueDetails);



