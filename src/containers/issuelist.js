import React, {Component} from 'react';
import {connect} from 'react-redux';
import { issue } from '../reducers/issue'

class IssueList extends Component {
    
    render() {
        return (
            <ul>
                {
                    this.props.issue.map((issue) => {
                    return <li key = { this.props.issue.id } > { this.props.issue.id }) { this.props.issue.title}</li>
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
