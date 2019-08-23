import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter as Link } from "react-router-dom";
import { Link } from 'react-router-dom';

class IssueList extends Component {

    // handleRedirect() {
    //     // console.log(this.props.issue.id);
    //     this.props.history.push("../createissue");
    // }

    render() {
        return (
            <ul>
                {
                    this.props.issue.map((issue) => {
                        return <li key={issue.id}>{issue.id})<Link to={`issue/${issue.id}`}>{issue.title} </Link></li>
                        }
                    )
                }
            </ul>
        )
    }
}

function mapStatetoProps(state) {
    return {
        issue: state.allissues
    };
}

export default connect(mapStatetoProps)(IssueList);
