import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainComponent from './Components/MainComponent'
import SearchBar from './Components/SearchBar'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    bookList: [],
  }
  

  componentDidMount() {
    BooksAPI.getAll().then((bookList) => {
        this.setState( { bookList }) //don't need to write out value since the key is the same.
    }) 
    /* TODO: render books to UI */
}
  render() {
    return (
        <div className="app">
           <Route exact path="/" render={() => 
           <MainComponent 
              bookList={this.state.bookList} /> 
          }/>   
           <Route path="/search" render={() => 
           <SearchBar /> 
           }/>
        </div>
    )
  }
}

export default BooksApp
