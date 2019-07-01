import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import CreateIssue from './CreateIssue';
import IssueList from '../containers/issuelist';

class IssuePage extends Component {


    handleRedirect() {
        this.props.history.push("../createissue");
    }

    render() {
        return (
            <div>
                <button
                        className="CreateIssue"
                        onClick={() => this.handleRedirect()}
                    >
                        Create New Issue
                </button>
                List of Issues:
                <IssueList />
            </div>
        );
    }
}

export default IssuePage;
