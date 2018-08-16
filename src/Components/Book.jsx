import React from 'react'
import '../App.css'




class Book extends React.Component {
    render() {
        //set book cover below just in case we encounter an undefined value
        let backUpCover = "url('https://mdn.mozillademos.org/files/7693/catfront.png')"
        let bookCover = this.props.book.imageLinks ? 'url(' + this.props.book.imageLinks.thumbnail + ')': backUpCover
        return(
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: bookCover }}></div>
                    <div className="book-shelf-changer">
                    <select onChange={(event) => this.props.moveBookToShelf(
                        this.props.book, event.target.value)}
                        value = {this.props.currentShelf} >
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
                </div>
        )
    }
}

export default Book
