import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import IssuePage from "./IssuePage";

class CreateIssue extends Component {

    constructor(props) {
        super(props);

        this.state = {
            status: false,
            issueDetails: "",
            issueNo: []
        }
    }

    updateInput(issue, value) {
        this.setState({
            issue: value
        });
    }

    updateLibraryCount() {
        this.props.handleCounter(this.state);
    }

    handleChange() {
        this.setState({ status: !this.state.status }, this.updateLibraryCount);
    }
    render() {
        return (
            <div>
            <input
                maxLength="32"
                className="TaskBox"
                type="text"
                placeholder="Enter task"
                value={this.state.issue}
                onChange={e => this.updateInput("issue", e.target.value)}
            />
            <button
                className="AddButton"
                onChange={this.handleChange}
            >
                
            <Link to="/issue">Add</Link>
            </button>
            </div>
        );
    }





}

export default CreateIssue;