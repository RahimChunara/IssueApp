import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
//import IssuePage from "./IssuePage";
import { actionCreators } from "../actions/index";

class CreateIssue extends Component {

    handleinput(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        maxLength="32"
                        className="TaskBox"
                        type="text"
                        placeholder="Enter task"
                        onChange={e => actionCreators.addTitle(e.target.value)}
                    />
                    <button
                        onChange={e => this.handleinput(e)}
                    >
                        ADD
                    </button>
                </form>
            </div>
        );
    }





}

export default CreateIssue;