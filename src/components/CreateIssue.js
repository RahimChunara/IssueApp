import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import { actionCreators } from "../actions/index";
import { connect } from 'react-redux';
import { addissue } from '../actions/index';
import { allissues } from '../reducers/index'
import { issue } from '../reducers/issue';

class CreateIssue extends Component {

    // onSubmit(e) {
    //     e.preventDefault();
    //     this.props.onSubmitForm;
    // }
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            title: '',
            description: ''
        }
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let value = {
            title: this.state.title,
            description: this.state.description
        }
        this.props.onSubmitForm(value);
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        id="title"
                        type="text"
                        placeholder="ENTER TITLE"
                        name="title"
                        // value={this.props.value}
                        onChange = {this.handleChange}
                    /><br/>
                    <input
                        id="title"
                        type="text"
                        placeholder="Enter DESCRIPTION"
                        name="description"
                        onChange={this.handleChange}
                    />
                    <button>
                        SUBMIT
                    </button>
                </form>
            </div>
        );
    }
}



function mapStatetoProps(state) {
    return {
        issues: state.allissues
    }
}

function mapDispatchtoProps(dispatch) {
    return {
        onSubmitForm: (value) => {
            dispatch(addissue(value));
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(CreateIssue);

