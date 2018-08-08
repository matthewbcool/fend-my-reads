import React from 'react'
import '../App.css'
import Book from './Book'

// TO DO: render JSON info to Books
class BookShelf extends React.Component {
    render() {
        console.log(this.props.currentlyReading, this.props.wantToRead, this.props.read)
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                  
                  {JSON.stringify(this.props.wantToRead)}
                  {JSON.stringify(this.props.read)}
              </ol>
            </div>
          </div>
        )
    }
}

export default BookShelf