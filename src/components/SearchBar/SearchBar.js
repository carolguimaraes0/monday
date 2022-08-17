import React from "react";
import './SearchBar.css';

const sortByOptions = {
    data: 'data_realizacao'
};

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            term: '',
            sortby: 'data_realizacao'
        };
        this.handleTermChange=this.handleTermChange.bind(this);
        this.handleSearch=this.handleSearch.bind(this);
    }

    handleSearch(event) {
        this.props.searchFutebolApi(this.state.term, this.state.sortby);
        event.preventDefault();
    }
    
    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }

    getSortByClass(sortByOption) {
        if (sortByOption === this.state.sortBy) {
            return 'ative';
        } else {
            return '';
        }
    }

    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption })
    }

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption]
            return (<list key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</list>)
        });
    }

    render() {
        return (
            <div>
                <div className="SearchBar">
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChange} placeholder="Qual jogo você está buscando?" />  
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Buscar</a>
                </div>
            </div>
            </div>
        )
    }
};

export default SearchBar;