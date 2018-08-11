import React from 'react'
import '../App.css'

class Book extends React.Component {
    render() {
        console.log(this.props.book)
        let bookCover = 'url(' + this.props.book.imageLinks.thumbnail + ')'
        return(
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: bookCover }}></div>
                    <div className="book-shelf-changer">
                    <select>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">HardCoded Title</div>
                <div className="book-authors">Orson Scott Card</div>
                </div>
        )
    }
}

export default Book
