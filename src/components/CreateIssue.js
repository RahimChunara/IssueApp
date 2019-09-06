import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addissue } from '../actions/index';
import { Select } from 'antd';

const { Option } = Select;

class CreateIssue extends Component {

    // onSubmit(e) {
    //     e.preventDefault();
    //     this.props.onSubmitForm;
    // }
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onUpdateItem = this.onUpdateItem.bind(this);
        this.state = {
            title: '',
            description: '',
            date: new Date().toLocaleString(),
            labels: []
        }
    }

    // handleLabel(evt) {
    //     console.log(evt);
    // }

    onUpdateItem(value) {
        console.log(value)
        this.setState({
            labels: value
        });
    }
        // const labels = this.state.labels;
        // labels[i] = event.target.value;
        // this.setState({ labels });


    handleChange(evt) {
        // console.log(evt.target.value);
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let value = {
            title: this.state.title,
            description: this.state.description,
            date: this.state.date,
            labels: this.state.labels
        }
        this.props.onSubmitForm(value);
        this.redirecthomepage()
    }

    redirecthomepage() {
        this.props.history.push('/issue')
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
                        onChange={this.handleChange}
                    /><br />
                    <input
                        id="title"
                        type="text"
                        placeholder="Enter DESCRIPTION"
                        name="description"
                        onChange={this.handleChange}
                    /><br />
                    <Select
                        mode="multiple"
                        name="labels"
                        style={{ width: '50%' }}
                        placeholder="Select Labels"
                        onChange={this.onUpdateItem}
                    >
                        <Option value="Bug" label="Bug">
                            <span role="img" aria-label="Bug">
                                Bug
                            </span>
                        </Option>
                        <Option value="Documentation" label="Documentation">
                            <span role="img" aria-label="Documentation">
                                Documentation
                            </span>
                        </Option>
                        <Option value="Duplicate" label="Duplicate">
                            <span role="img" aria-label="Duplicate">
                                Duplicate
                            </span>
                        </Option>
                        <Option value="Enhancement" label="Enhancement">
                            <span role="img" aria-label="Enhancement">
                                Enhancement
                            </span>
                        </Option>
                    </Select><br/>
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

