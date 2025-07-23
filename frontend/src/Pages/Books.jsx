import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Books.css';

export default function Books() {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    async function getBooks() {
      try {
        let response = await axios.get("http://localhost:5500/api/books/list");
        setBooksData(response.data);
      } catch (err) {
        console.error("Failed to fetch books:", err);
      }
    }
    getBooks();
  }, []);

  return (
    <div className="books-page">
      <header className="books-header">
        <h1>Explore Books</h1>
        <p>Browse through various categories and find your next great read</p>
      </header>

      <div className="books-grid">
        {booksData.map((book) => (
          <div className="book-card" key={book._id}>
            <img src={book.BookPoster} alt={book.BookName} />
            <div className="book-info">
              <h2>{book.BookName}</h2>
              <h4>{book.BookAuthor}</h4>
              <p className="desc">{book.BookDesc}</p>
              <p className="price">₹ {book.BookPrice}</p>
              <button>Read Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
