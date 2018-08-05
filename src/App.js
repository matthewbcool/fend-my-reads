import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBar from './Components/SearchBar'
import BookShelf from './Components/BookShelf'
import {
  Route,
  Link
} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: import react-router-dom and use <Route> and <Link> components to adjust URL on clicks and display the right component. 
     * https://reacttraining.com/react-router/web/example/basic
     */
  }
  render() {
    return (
        <div className="app">
            <Route path="/search" render={() => <SearchBar /> } />
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelf title="Currently Reading" />
                  <BookShelf title="Want to Read" />
                  <BookShelf title="Read" />
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>  
        </div>
    )
  }
}

export default BooksApp
