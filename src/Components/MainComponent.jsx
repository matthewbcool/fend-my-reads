import React from 'react'
import '../App.css'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class MainComponent extends React.Component {
  render() {
    //TO DO: rework the filter into the bookshelf component and give all shelves the same prop.
    return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelf title="Currently Reading" bookList = {this.props.bookList}  />
                  <BookShelf title="Want to Read" bookList = {this.props.bookList}  />
                  <BookShelf title="Read" bookList = {this.props.bookList} />
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
