import React, { Component } from 'react';
import IssueList from '../containers/issuelist';

class IssuePage extends Component {


    handleRedirect() {
        this.props.history.push("../createissue");
    }

    render() {
        return (
            <div><br /><br />
                <button
                        className="CreateIssue"
                        onClick={() => this.handleRedirect()}
                    >
                        Create New Issue
                </button><br/><br/>
                List of Issues:
                <IssueList />
            </div>
        );
    }
}

export default IssuePage;
