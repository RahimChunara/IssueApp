import React, { Component } from 'react';
import { connect } from 'react-redux';

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

export default connect(mapStatetoProps)(IssueDetails);



