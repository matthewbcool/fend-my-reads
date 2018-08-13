import React from 'react'
import '../App.css'




class Book extends React.Component {
    render() {
        let bookCover = 'url(' + this.props.book.imageLinks.thumbnail + ')'
        let backUpCover = "url('https://mdn.mozillademos.org/files/7693/catfront.png')"
        let decideCover = () => {return (this.props.book.imageLinks.thumbnail !== 'undefined') ? bookCover : backUpCover}

        return(
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: decideCover() }}></div>
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
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
                </div>
        )
    }
}

export default Book
