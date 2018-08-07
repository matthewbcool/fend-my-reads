import React from 'react'
import '../App.css'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class MainComponent extends React.Component {
  render() {
    let test = this.props.bookList.length > 0 ? this.props.bookList : "empty"
    return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelf title="Currently Reading" shelfList={this.props.bookList.filter(book => book.shelf === 'currentlyReading').map(book => console.log(book))}  />
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
