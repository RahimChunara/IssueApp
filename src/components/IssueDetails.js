import React, { Component } from 'react';
import { connect } from 'react-redux';
import { issueStatus } from '../actions/index';
import { bindActionCreators } from 'redux';
import { PageHeader, Button, Statistic, Row } from 'antd';
import 'antd/dist/antd.css';
import '../css/issueDetails.css';


class IssueDetails extends Component {

    render() {
        return (

            <ul>
                {
                    this.props.issue.map((issue) => {
                        if (this.props.match.params.id == issue.id) {
                            return (
                                <div>
                                    <PageHeader
                                        onBack={() => window.history.back()}
                                        title={issue.title}
                                        extra={[<Button key="1" type="primary" onClick={() => { if (window.confirm('Are you sure you wish to close the issue?')) this.props.issueStatus(issue) }}>Close Issue</Button>]}>
                                        <Row type="flex">
                                            <Statistic title="Description" value={issue.description} />
                                        </Row>
                                    </PageHeader>
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



