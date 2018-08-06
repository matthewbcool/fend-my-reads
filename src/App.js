import React from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'
import MainComponent from './Components/MainComponent'
import SearchBar from './Components/SearchBar'
import { Route, Link} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {

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
