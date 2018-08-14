import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainComponent from './Components/MainComponent'
import SearchBar from './Components/SearchBar'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    bookList: [{
      title: '',
      subtitle: '',
      authors: '',
      publisher: '',
      publishedDate: '',
      id: '',
      shelf: '',
    }],
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((bookList) => {
        this.setState( { bookList }) //don't need to write out value since the key is the same.
    }) 
    /* TODO: render books to UI */
}

  moveBookToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((bookList) => {
      this.setState({bookList})
    })
  }
  render() {
    return (
        <div className="app">
           <Route exact path="/" render={() => 
           <MainComponent 
              bookList={this.state.bookList}
              moveBookToShelf= {this.moveBookToShelf} /> 
          }/>   
           <Route path="/search" render={() => 
           <SearchBar /> 
           }/>
        </div>
    )
  }
}

export default BooksApp
