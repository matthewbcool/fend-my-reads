import React from 'react'
import '../App.css'
import Book from './Book'

// TO DO: render JSON info to Books
class BookShelf extends React.Component {
    render() {

        if (this.props.bookList !== 'undefined') {

        this.props.bookList.filter(book => book.shelf === 'wantToRead').map(book => wantToRead.push(book))
        this.props.bookList.filter(book => book.shelf === 'read').map(book => read.push(book))
        } else {console.log('whaaaa??')}
        console.log(this.props.currentlyReading, this.props.wantToRead, this.props.read)
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                  {this.props.bookList.filter(book => book.shelf === 'currentlyReading').map(book => {
                      <li key= {book.id} >
                        <Book book = {book} />
                      </li>
                  } )
                  
                }
                  {JSON.stringify(this.props.wantToRead)}
                  {JSON.stringify(this.props.read)}
              </ol>
            </div>
          </div>
        )
    }
}

export default BookShelf