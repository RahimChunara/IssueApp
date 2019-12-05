import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Table, Tag, Input, Select } from 'antd';
import { getissue } from '../actions/index';
// import PropTypes from 'prop-types';


const { Option } = Select;
const { Column } = Table;

let sortedElements;
class IssueList extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleType = this.handleType.bind(this);
        this.state = {
            search: '',
            alphabetical: 'az',
            selectedValue: '',
            selectedType: ''
        };
    }

    componentDidMount() {
        this.props.getissue();
    }

    handleSearch(e) {
        this.setState({ search: e.target.value });
    }

    handleType(value) {
        this.setState({ selectedType: value }, function () {
            this.sortType();
        }
        )
    }

    handleChange(value) {
        this.setState({ selectedValue: value }, function () {
            this.sortingFunc();
        }
        )
    }

    handleClick(e) {
        this.props.history.push("/hello");
    }

    sortingFunc = () => {
        const { issues } = this.props.issue;
        if (this.state.selectedValue === 'Alphabetically') {
            sortedElements = issues
                .sort(function (a, b) {
                    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
                    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
                    return 0;
                })
        } else {
            sortedElements = issues;
        }
        this.forceUpdate();
    }


    checkSort(issueType) {
        const { issues } = this.props.issue;
        console.log(sortedElements);
        sortedElements = issues.filter(
            (issue) => {
                return issue.labels.includes(issueType);
            }
        )
    }

    sortType() {
        if (this.state.selectedType === 'Bug') {
            this.checkSort('Bug');
        }
        else if (this.state.selectedType === 'Documentation') {
            this.checkSort('Documentation');
        }
        else if (this.state.selectedType === 'Duplicate') {
            this.checkSort('Duplicate');
        }
        else if (this.state.selectedType === 'Enhancement') {
            this.checkSort('Enhancement');
        }
        else {
            this.checkSort('Bug', 'Documentation', 'Duplicate', 'Enchancement');
        }
        this.forceUpdate();
    }

    render() {
        const { issues } = this.props.issue;
        // console.log(sort);
        var sort;
        if (sortedElements) { sort = sortedElements } else { sort = issues }
        let filteredIssues = issues.filter(
            (issue) => {
                return issue.title.toLowerCase().includes(this.state.search.toLowerCase()) || issue.description.toLowerCase().includes(this.state.search.toLowerCase());
            }
        );

        return (
            <Fragment style={{ marginLeft: '2.5%' }}>
                <Input
                    type="text"
                    value={this.state.search}
                    placeholder="Search"
                    onChange={this.handleSearch.bind(this)} allowClear
                    style={{ width: '15%', marginLeft: '2.5%', position: 'absolute', marginTop: '2.5%' }}
                />
                <br /><br />
                <div style={{ marginLeft: '70%' }}>
                    <Select defaultValue="Sort By" style={{ width: 120 }} onSelect={(value) => this.handleChange(value)} required>
                        <Option value="Sort By">Sort By</Option>
                        <Option value="Alphabetically">Alphabetically</Option>
                    </Select>
                    <Select defaultValue="Filter By" style={{ width: 120 }} onSelect={(value) => this.handleType(value)} required>
                        <Option value="Filter By">Filter By</Option>
                        <Option value="Bug">Bug</Option>
                        <Option value="Documentation">Documentation</Option>
                        <Option value="Duplicate">Duplicate</Option>
                        <Option value="Enhancement">Enhancement</Option>
                    </Select>
                </div>
                <br />
                <div style={{ marginLeft: '2.5%' }}>
                    <Table dataSource={filteredIssues} style={{ width: '95%' }} bordered>
                        <Column title="Issue" dataIndex="title" key="title" onClick={() => this.handleClick} render={(text, issue) => <Link to={`issue/${issue._id}`}>{text}</Link>} />
                        <Column title="Status" dataIndex="status" key="status" />
                        <Column
                            title="Tags"
                            dataIndex="labels"
                            key="labels"
                            render={labels => (
                                <span>
                                    {labels.map(labels => (
                                        <Tag color="blue" key={labels}>
                                            {labels}
                                        </Tag>
                                    ))}
                                </span>
                            )}
                        />
                        <Column title="Date Published" dataIndex="date" key="date" />
                    </Table>
                </div>
            </Fragment>
        )
    }
}

// IssueList.propTypes = {
//     getissue: PropTypes.func.isRequired,
//     issue: PropTypes.object.isRequired
// }

function mapStatetoProps(state) {
    return {
        issue: state.allissues
    };
}

export default connect(mapStatetoProps, { getissue })(IssueList);
