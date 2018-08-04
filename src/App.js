import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBar from './Components/SearchBar'
import BookShelf from './Components/BookShelf'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: import react-router-dom and use <Route> and <Link> components to adjust URL on clicks and display the right component. 
     * https://reacttraining.com/react-router/web/example/basic
     */
    showSearchPage: false,
  }


      /**
     * TODO: decomposition of this whole thing....
     */

  render() {
    
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBar />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf />
                <BookShelf />
                <BookShelf />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
