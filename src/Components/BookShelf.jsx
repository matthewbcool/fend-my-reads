import React from 'react'
import '../App.css'
import Book from './Book'

class BookShelf extends React.Component {
    render() {
        console.log()
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                  {this.props.bookList.map(book => {
                      console.log(book)
                      return <li key= {book.id} > <Book book = {book} moveBookToShelf= {this.props.moveBookToShelf} currentShelf={book.shelf} /> </li>} )
                  }
              </ol>
            </div>
          </div>
        )
    }
}

export default BookShelf