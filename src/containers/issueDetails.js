import React, { Component } from 'react';
import { connect } from 'react-redux';


class IssueDetails extends Component {
    render() {
        return(
            <div>
                <ul>
                    <li>{this.props.issues.title}</li>
                    <li>{this.props.issues.description}</li>
                </ul>
            </div>
        );
    }


}

function mapStatetoProps(state) {
    return {
        issues: state.activeIssue
    };
}

export default connect(mapStatetoProps)(IssueDetails);