import React from 'react'
import '../App.css'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class MainComponent extends React.Component {
  render() {
    let books = this.props.books
    return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
              <p> { JSON.stringify(books[0]) } </p>
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
    )
  }
}

export default MainComponent
