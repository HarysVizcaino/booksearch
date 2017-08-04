import React, { Component } from 'react';

const noBootImage = 'https://vignette1.wikia.nocookie.net/superfriends/images/a/a5/No_Photo_Available.jpg/revision/latest?cb=20090329133959'

class Gallery extends Component {
  render() {
    return (
      <div>
      {
        this.props.items.map((item, index) => {
          let { title, imageLinks,  infoLink } = item.volumeInfo;
          return (
            <a
              key={index}
              className="Books"
              href={infoLink}
              target="_blank"
              >
              <img
                src={imageLinks !== undefined ? imageLinks.thumbnail : noBootImage}
                alt="book images"
                className="book-img"
                />
              <div className="book-text">
            {title}
            </div>
          </a>
          )
        })
      }
      </div>
    )
  }
}

export default Gallery;
