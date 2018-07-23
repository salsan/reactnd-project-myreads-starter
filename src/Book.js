import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
  render (){
    const style = {
        width: 128,
        height: 192,
        backgroundImage: this.props.book.imageLinks ?
          `url(${this.props.book.imageLinks.thumbnail})` :
          `url(${"https://dummyimage.com/128x192/fff/000000.png&text=No+Preview"})`
    }

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={
              style
            }></div>

          <BookShelfChanger
              book = {this.props.book}
              currentShelf = {this.props.currentShelf}
              updateShelf = {this.props.updateShelf}
          />

        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

export default Book
