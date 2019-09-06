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
        this.handleChange = this.handleChange.bind(this);
        this.handleType = this.handleType.bind(this);
        this.state = {
            search: '',
            alphabetical: 'az',
            selectedValue: '',
            selectedType: ''
        };
    }

    handleSearch(e) {
        this.setState({ search: e.target.value });
    }

    handleType(e) {
        this.setState({ selectedType: e.target.value }, function () {
            this.sortType();
        }   
    )}

    handleChange(e) {
        // console.log(e.target.value)
        this.setState({ selectedValue: e.target.value }, function() {
            this.sortingFunc();
        }
    )}

    sortingFunc = () => {
        // this.setState({ selectedValue: e.target.value })
        //console.log(this.state.selectedValue);
        //console.log(sortedElements);
        if (this.state.selectedValue === 'Alphabetically') {
            sortedElements = this.props.issue
                .sort(function (a, b) {
                    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
                    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
                    return 0;
                })
        } else {
            //console.log("ALL");
            sortedElements = this.props.issue;
        }
        this.forceUpdate();
    }


    checkSort(issueType) {
        console.log(sortedElements);
        sortedElements = this.props.issue.filter(
            (issue) => {
                return issue.labels.includes(issueType);
            }
        )
    }
    sortType() {
        // console.log(sortedElements)
        if( this.state.selectedType === 'Bug') {
            // console.log("Bug");
            this.checkSort('Bug');
        }
        else if (this.state.selectedType === 'Documentation') {
            this.checkSort('Documentation');
        }
        else if( this.state.selectedType === 'Duplicate') {
            this.checkSort('Duplicate');
        }
        else if (this.state.selectedType === 'Enhancement') {
            this.checkSort('Enhancement');
        }
        else {
            this.checkSort('Bug', 'Documentation', 'Duplicate', 'Enchancement');
        }
        this.forceUpdate();
        // console.log(sortedElements);

    }

    render() {
        // console.log(sortedElements)
        var sort;
        if (sortedElements) { sort = sortedElements } else { sort = this.props.issue }
        // console.log(sort);
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
                <select onChange={this.handleChange}>
                    <option value="Sort By">Sort By</option>
                    <option value="Alphabetically">Alphabetically</option>
                </select>
                <select onChange={this.handleType} required>
                    <option value="Filter By">Filter By</option>
                    <option value="Bug">Bug</option>
                    <option value="Documentation">Documentation</option>
                    <option value="Duplicate">Duplicate</option>
                    <option value="Enhancement">Enhancement</option>
                </select>
                <br/>

                <ul>
                    {
                        filteredIssues.map((issue) => {
                            return <li key={issue.id}><Link to={`issue/${issue.id}`}> {issue.title} </Link></li>
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
