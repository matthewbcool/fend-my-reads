import React from 'react'
import '../App.css'
import Book from './Book'

// TO DO: render JSON info to Books ---  fix undefined value in props
class BookShelf extends React.Component {
    render() {
        console.log()

        //this.props.bookList.filter(book => book.shelf === 'wantToRead').map(book => wantToRead.push(book))
        //this.props.bookList.filter(book => book.shelf === 'read').map(book => read.push(book))

        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                  {this.props.bookList.map(book => {
                      return <li key= {book.id} > <Book book = {book} moveBookToShelf= {this.props.moveBookToShelf} /> </li>} )
                  }
              </ol>
            </div>
          </div>
        )
    }
}

export default BookShelf