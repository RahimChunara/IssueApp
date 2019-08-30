import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter as Link } from "react-router-dom";
import { Link } from 'react-router-dom';
//import { Menu, Dropdown, Icon } from 'antd';
import 'antd/dist/antd.css';


let sortedElements;
class IssueList extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            alphabetical: 'az',
            selectedValue: ''
        };
    }

    handleSearch(e) {
        this.setState({ search: e.target.value });
    }

    handleChange(e) {
        this.setState({ selectedValue: e.target.value })
    }

    sortingFunc = () => {
        console.log(this.state.selectedValue);
        if (this.state.selectedValue !== 'All') {
            if (this.state.alphabetical === "az") {
                //console.log("sort");
                sortedElements = this.props.issue.sort((a, b) =>
                    a.title.first > b.title.first ? 1 : -1
                );
            } else {
                sortedElements = this.props.issue.sort((a, b) =>
                    a.title.first < b.title.first ? 1 : -1
                );
            }
        } else {
            sortedElements = this.props.issue;
        }
        this.forceUpdate();
    }

    render() {
        var sort;
        if (sortedElements === '') { sort = sortedElements } else { sort = this.props.issue }
        //console.log(sort);
        let filteredIssues = sort.filter(
            (issue) => {
                return issue.title.toLowerCase().includes(this.state.search.toLowerCase()) || issue.description.toLowerCase().includes(this.state.search.toLowerCase());
            }
        );

        return (
            <Fragment>
                <input type="text"
                    value={this.state.search}
                    onChange={this.handleSearch.bind(this)} />
                <br /><br />
                <select onChange={this.sortingFunc}>
                    <option value="All">All</option>
                    <option value="Alphabetically">Alphabetically</option>
                </select>
                <br />

                <ul>
                    {
                        filteredIssues.map((issue) => {
                            return <li key={issue.id}>{issue.id})<Link to={`issue/${issue.id}`}> {issue.title} </Link></li>
                        }
                        )
                    }
                </ul>
            </Fragment>
        )
    }
}

function mapStatetoProps(state) {
    return {
        issue: state.allissues
    };
}

export default connect(mapStatetoProps)(IssueList);
