import React from 'react'
import '../App.css'
import Book from './Book'

class BookShelf extends React.Component {
    render() {
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                  <Book />
              </ol>
            </div>
          </div>
        )
    }
}

export default BookShelf