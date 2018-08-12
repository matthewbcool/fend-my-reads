import React from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import { Link } from 'react-router-dom'
import  Book from '../Components/Book'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            queryObject: [{
                title: '',
                subtitle: '',
                authors: '',
                publisher: '',
                publishedDate: '',
                id: '',
                shelf: '',
                imageLinks: '',
              }],
              query: '',
              event: ''
        }
        this.handleChange = this.handleChange.bind(this);
      }
    handleChange(event) {
    this.setState({value: event.target.value});
    }

    
    updateSearch = (query) => {
        //needed a way to not make the call so that I wouldn't return an undefined object
        if (query.length < 2) {
            this.setState({query: query})
        } else {
    this.setState({ query: query })
    BooksAPI.search(this.state.query).then((query) => {
        this.setState( {queryObject: query} )
        console.log(this.state.queryObject) 
    })
 }
    }

    render() {
        return(
            <div className="search-books">
            <div className="search-books-bar">
             <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {}
                 <input 
                    type="text" 
                    placeholder="Search by titles or author"
                    value={ this.state.query }
                    onChange={(event) => {
                        this.updateSearch(event.target.value)
                        } } />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.queryObject.map(book => {
                        console.log(book)
                        return <li key={book.id} > <Book book={book} /> </li>
                    })
                }
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBar