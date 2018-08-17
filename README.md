# MyReads Project
This is a project for Udacity's FEND nanodegree. My-Reads helps you keep track of books you are reading and find books you would like to read.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). 
run `npm start` to spin up the dev build.


## Backend Server

To simplify the development process, Udacity provided a backend server to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the following methods:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.