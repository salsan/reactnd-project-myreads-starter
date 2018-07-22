import React from 'react'
import {Route, Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksContent from './BooksContent'
import BooksSearch from './BooksSearch'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books)  => {
        this.setState({ books })
    })

  }

  render() {

    return (
      <div className="app">
        <Route exact path="/search" render={() => (
              <BooksSearch/>
            )
          }/>
          <Route exact path="/" render={() => (
            <div className="list-books">
              <BooksContent
                books={this.state.books}
                />
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>)
        }/>

    </div>)
  }
}

export default BooksApp
