import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BooksContent extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
      <div className="list-books-content">
      <div>
        <BookShelf
          books = { this.props.books }
          title = {"Currently Reading"}
          value = {"currentlyReading"}
          updateShelf={this.props.updateShelf}
        />
        <BookShelf
          books = { this.props.books }
          title = {"Want to Read"}
          value = {"wantToRead"}
          updateShelf={this.props.updateShelf}
        />
        <BookShelf
          books = { this.props.books }
          title = {"Read"}
          value = {"read"}
          updateShelf={this.props.updateShelf}
        />
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>)
  }
}

export default BooksContent
