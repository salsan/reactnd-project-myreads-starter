import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class BooksSearch extends Component {
  state = {
    query : '',
    matchBooks: []
  }

  updateQuery = (query) => {
    this.setState({
     query : query
    })
    this.searchBooks(query)
  }

  searchBooks = (query) => {
    if (query){
      BooksAPI.search( query ).then((matchBooks) => {
        if ( matchBooks.error){
          this.setState({ matchBooks: []})
        } else {
            this.setState({ matchBooks })
        }
      })
      } else {
        this.setState({ matchBooks: []})
      }
  }

  render() {

    return(
      <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                  type="text"
                  placeholder="Search by title or author"
                  value = {this.state.query}
                  onChange={(event)=>this.updateQuery(event.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {
                this.state.matchBooks.map(matchBooks =>  {
                  let shelf = 'none';

                  this.props.books.map( book =>(
                    book.id === matchBooks.id ?
                    shelf = book.shelf :
                    ''
                  ))
                    return (
                      <li key={matchBooks.id} >
                          <Book
                            book={matchBooks}
                            updateShelf={this.props.updateShelf}
                            currentShelf={shelf}
                          />
                    </li>
                  )
                })
              }
              </ol>
            </div>
          </div>)
  }
}


export default BooksSearch
