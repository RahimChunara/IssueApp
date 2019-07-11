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
                <form onSubmit={e => (e.preventDefault(), this.props.onSubmitForm)}>
                    <input
                        id="title"
                        type="text"
                        placeholder="Enter task"
                        value={this.props.title}
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
        issues: state.allissues
    }
}

function mapDispatchtoProps(dispatch) {
    return {
        onSubmitForm: (evt) => {
            dispatch(addissue(evt.target.title.value));
        }
    }
    //return bindActionCreators({ addissue: addissue, dispatch })
}

export default connect(mapStatetoProps, mapDispatchtoProps)(CreateIssue);
//export default CreateIssue;

