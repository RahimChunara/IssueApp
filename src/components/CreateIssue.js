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

    
    render() {
        return (
            <div>
                <form onSubmit={e => (e.preventDefault(), this.props.onSubmitForm(e.target.value))}>
                    <input
                        id="title"
                        type="text"
                        placeholder="Enter task"
                        value={this.props.value}
                    />
                    <button>
                        ADD
                    </button>
                </form>
            </div>
        );
    }
}



function mapStatetoProps(state) {
    return {
        issues: state.issue
    }
}

function mapDispatchtoProps(dispatch) {
    //console.log(value)
    return {
        onSubmitForm: (value) => {
            dispatch(addissue(value));
        }
    }
    //return bindActionCreators({ addissue: addissue, dispatch })
}

export default connect(mapStatetoProps, mapDispatchtoProps)(CreateIssue);
//export default CreateIssue;

