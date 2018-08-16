import React from 'react'
import '../App.css'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class MainComponent extends React.Component {
  render() {
    //TO DO: rework the filter into the bookshelf component and give all shelves the same prop.
    let currentlyReading = this.props.bookList.filter(book => book.shelf === 'currentlyReading')
    let wantToRead = this.props.bookList.filter(book => book.shelf === 'wantToRead')
    let read = this.props.bookList.filter(book => book.shelf === 'read')
    return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelf title="Currently Reading" bookList = {currentlyReading} moveBookToShelf={this.props.moveBookToShelf}  />
                  <BookShelf title="Want to Read" bookList = {wantToRead} moveBookToShelf={this.props.moveBookToShelf}  />
                  <BookShelf title="Read" bookList = {read} moveBookToShelf={this.props.moveBookToShelf} />
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
