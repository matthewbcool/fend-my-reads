import React from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import Book from '../Components/Book'
import { Link } from 'react-router-dom'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            queryObject: [{
                title: '',
                subtitle: '',
                authors: '',
                publisher: '',
                publishedDate: '',
                id: '',
                shelf: '',
                imageLinks: { thumbnail: '' },
            }],
            query: '',
            event: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }


    updateSearch = (query) => {
        //needed a way to not make the call so that I wouldn't return an undefined object
        this.setState({ query: query})
        if (query.length > 2) {
            BooksAPI.search(query).then((query) => {
                //check to see if we are throwing an error -- namley .map() is not a function --resets to empty array so we can still call .map
                if (query.error) {
                    this.setState({ queryObject: [] })
                } else {
                    this.setState({ queryObject: query})
                }
            })
        } else {
            this.setState({ queryObject: [] })
        }
    }



    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        {}
                        <input
                            type="text"
                            placeholder="Search by titles or author"
                            value={this.state.query}
                            onChange={(event) => {
                                this.updateSearch(event.target.value)
                            }} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.queryObject.map(book => {
                            let shelf="none"
                            if (this.state.queryObject[0].title === "") {
                                return <li key={book.id}>
                                    'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
                                </li>
                            } else {
                                return <li key={book.id} > <Book book={book} moveBookToShelf={this.props.moveBookToShelf} currentShelf={shelf} /> </li>
                            }
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBar