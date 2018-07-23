import React, { Component } from 'react'

class Book extends Component {
  render (){
    const style = {
        width: 128,
        height: 192,
        backgroundImage: this.props.book.imageLinks ?
          `url(${this.props.book.imageLinks.thumbnail})` :
          `url(${"https://via.placeholder.com/128x192"})`
    }

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={
              style
            }></div>
          <div className="book-shelf-changer">
            <select
                onChange={ (event) => this.props.updateShelf(
                  this.props.book, event.target.value
                )}

                value = {this.props.currentShelf}
            >
              <option value="move" disabled="disabled">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

export default Book
