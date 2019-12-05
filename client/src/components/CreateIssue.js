import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addissue } from '../actions/index';
import { Select, Input, Button } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

class CreateIssue extends Component {

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

    onUpdateItem(value) {
        console.log(value)
        this.setState({
            labels: value
        });
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
            description: this.state.description,
            date: this.state.date,
            labels: this.state.labels,
            status: 'OPEN'
        }
        this.props.addissue(value);
        this.redirecthomepage()
    }

    redirecthomepage() {
        this.props.history.push('/issue')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <br /><br />
                    <Input
                        size="large"
                        id="title"
                        type="text"
                        placeholder="ENTER TITLE"
                        name="title"
                        style={{ marginLeft: '2.5%', width: '95%' }}
                        onChange={this.handleChange}
                    /><br /><br />
                    <TextArea
                        id="title"
                        type="text"
                        placeholder="Enter DESCRIPTION"
                        name="description"
                        onChange={this.handleChange}
                        style={{ marginLeft: '2.5%', width: '95%' }}
                        autosize={{ minRows: 2, maxRows: 6 }}
                    /><br /><br />
                    <Select
                        id="labels"
                        mode="multiple"
                        name="labels"
                        style={{ width: '50%', marginLeft: '25%' }}
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
                    </Select><br /><br />
                    <div style={{ textAlign: 'center' }}>
                        <Button type="primary" htmlType="submit">
                            SUBMIT
                    </Button>
                    </div>
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

// function mapDispatchtoProps(dispatch) {
//     return {
//         onSubmitForm: (value) => {
//             dispatch(addissue(value));
//         }
//     }
// }

export default connect(mapStatetoProps, { addissue })(CreateIssue);

