import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class IssuePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            issue: "",
            list: []
        }
    }

    updateInput(issue, value) {
        this.setState({
            issue: value
        });
    }

    addItem() {
        const issue = {
            id: Math.random(),
            value: this.state.issue.slice()
        };

        const list = [...this.state.list];

        list.push(issue);

        this.setState({
            list,
            issue: ""
        });
    }

    deleteItem(id) {
        const list = [...this.state.list];

        const updatedList = list.filter(item => item.id !== id);

        this.setState({ list: updatedList });
    }

    render() {
        return (
            <div className="App">
                <div>
                    <div className="Header">Add Task</div>
                    <br />
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
                        onClick={() => this.addItem()}
                        disabled={!this.state.issue.length}
                    >
                        ADD
          </button>
                    <br />
                    <ul>
                        {this.state.list.map(item => {
                            return (
                                <Router>
                                    <li key={item.id}>
                                        <Link key={item.id} to={`/${item.id}`}>{item.value}</Link>
                                        <button
                                            className="DeleteButton"
                                            onClick={() => this.deleteItem(item.id)}
                                        >
                                            X
                    </button>
                                    </li>
                                </Router>
                            )
                        }
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default IssuePage;