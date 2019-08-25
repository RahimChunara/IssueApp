import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter as Link } from "react-router-dom";
import { Link } from 'react-router-dom';

class IssueList extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }

    handleSearch(e) {
        this.setState({ search: e.target.value });
    }

    render() {
        let filteredIssues = this.props.issue.filter(
            (issue) => {
                return issue.title.toLowerCase().includes(this.state.search.toLowerCase());
            }
        );
        return (
            <Fragment>
                <input type="text"
                    value={this.state.search}
                    onChange={this.handleSearch.bind(this)} />
                <ul>
                    {
                        filteredIssues.map((issue) => {
                            return <li key={issue.id}>{issue.id})<Link to={`issue/${issue.id}`}>{issue.title} </Link></li>
                            }
                        )
                    }
                </ul>
            </Fragment>
        )
    }
}

function mapStatetoProps(state) {
    return {
        issue: state.allissues
    };
}

export default connect(mapStatetoProps)(IssueList);
