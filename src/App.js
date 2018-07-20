import React from 'react'
import * as BooksAPI from './BooksAPI'
import BooksContent from './BooksContent'
import BooksSearch from './BooksSearch'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (<div className="app">
      {
        this.state.showSearchPage
          ? (<div className="search-books">
            <BooksSearch/>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>)
          : (<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BooksContent/>
            <div className="open-search">
              <a onClick={() => this.setState({showSearchPage: true})}>Add a book</a>
            </div>
          </div>)
      }
    </div>)
  }
}

export default BooksApp
