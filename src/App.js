import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainComponent from './Components/MainComponent'
import SearchBar from './Components/SearchBar'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState( { books: books })
        console.log(this.state.books)
    }) 
    /* TODO: render books to UI */
}
  render() {
    return (
        <div className="app">
           <Route exact path="/" render={() => <MainComponent /> } />   
           <Route path="/search" render={() => <SearchBar /> } />
        </div>
    )
  }
}

export default BooksApp
