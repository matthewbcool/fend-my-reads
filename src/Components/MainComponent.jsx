import React from 'react'
import '../App.css'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class MainComponent extends React.Component {
  render() {
    let currentlyReading = []
    let wantToRead = []
    let read = []
    
    this.props.bookList.filter(book => book.shelf === 'currentlyReading').map(book => currentlyReading.push(book))
    this.props.bookList.filter(book => book.shelf === 'wantToRead').map(book => wantToRead.push(book))
    this.props.bookList.filter(book => book.shelf === 'read').map(book => read.push(book))
    return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelf title="Currently Reading" currentlyReading ={currentlyReading}  />
                  <BookShelf title="Want to Read" wantToRead = {wantToRead}  />
                  <BookShelf title="Read" read = {read} />
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
