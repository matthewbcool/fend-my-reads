import React from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import { Link } from 'react-router-dom'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            books: [],
            queryObject: []
        };
    
        this.handleChange = this.handleChange.bind(this);
      }
    handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value);
    }

    
    updateSearch = (query) => {
    this.setState({ query: query })
    BooksAPI.search(this.state.query).then((query) => {
        this.setState( {queryObject: query} )
        console.log(this.state.queryObject)
    })
    }

    render() {
        const { query } = this.state
        return(
            <div className="search-books">
            <div className="search-books-bar">
             <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {}
                 <input 
                    type="text" 
                    placeholder="Search by titles or author"
                    value={ query }
                    onChange={(event) => {
                        this.updateSearch(event.target.value)
                        } } />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )
    }
}

export default SearchBar