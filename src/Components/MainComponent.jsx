import React from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import SearchBar from './SearchBar'
import BookShelf from './BookShelf'
import { Route, Link} from 'react-router-dom'

class MainComponent extends React.Component {
  render() {
    return (
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
                <Route path="/search" render={() => <SearchBar /> } />
              </div>
            </div>  
    )
  }
}

export default MainComponent
