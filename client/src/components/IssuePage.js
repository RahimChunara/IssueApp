import React, { Component } from 'react';
import IssueList from '../containers/issuelist';
import { Button, Typography } from 'antd';

const { Title } = Typography;

class IssuePage extends Component {


    handleRedirect() {
        this.props.history.push("../createissue");
    }

    render() {
        return (
            <div><br />
                <Title style={{ position: 'absolute', marginTop: '1%', marginLeft: '2.5%' }}>Issue App</Title>
                <Button
                    type="primary"
                    className="CreateIssue"
                    onClick={() => this.handleRedirect()}
                    style={{ marginLeft: '75%', position: 'absolute', marginTop: '2%' }}
                >
                    Create New Issue
                </Button><br /><br />
                <IssueList />
            </div>
        );
    }
}

export default IssuePage;
