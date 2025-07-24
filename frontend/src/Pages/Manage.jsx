import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./Manage.css";

export default function Manage() {

  // Track whether we're updating an existing book
  const [isEditing, setIsEditing] = useState(false);

  // Store list of all books fetched from server
  const [bookList, setBookList] = useState([]);

  // Store data for the book being added or updated
  const [formData, setFormData] = useState({
    BookName: "",
    BookPoster: "",
    BookDesc: "",
    BookAuthor: "",
    BookPrice: "",
    BookCategory: "",
    BookPdfLink: ""
  });

  // Fetch all books on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  // Fetch books from backend
  async function fetchBooks() {
    try {
      const response = await axios.get("http://localhost:5500/api/books/list");
      setBookList(response.data);
    } catch (err) {
      console.error("Failed to fetch books:", err);
    }
  }

  // Update form data as user types
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Trigger edit mode with selected book's data
  const handleEditClick = (book) => {
    setIsEditing(true);
    setFormData(book);
  };

  // Submit form to add or update book
  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      if (!isEditing) {
        // Create new book
        await axios.post("http://localhost:5500/api/books/create", formData);
        alert("Book added successfully");
      } else {
        // Update existing book
        await axios.put(`http://localhost:5500/api/books/update/${formData._id}`, formData);
        alert("Book updated successfully");
        setIsEditing(false);
      }
      // Clear form and refresh list
      setFormData({
        BookName: "",
        BookPoster: "",
        BookDesc: "",
        BookAuthor: "",
        BookPrice: "",
        BookCategory: "",
        BookPdfLink: ""
      });
      fetchBooks();
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  }

  // Delete book by ID
  async function handleDelete(bookId) {
    try {
      await axios.delete(`http://localhost:5500/api/books/delete/${bookId}`);
      alert("Book deleted");
      fetchBooks();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  }

  return (
    <div>
      <h1>Manage Books</h1>

      {/* Form Section */}
      <div id="FormSection">
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="BookName" value={formData.BookName} onChange={handleInputChange} placeholder="Book Name" />
          <input type="text" name="BookPoster" value={formData.BookPoster} onChange={handleInputChange} placeholder="Book Poster URL" />
          <input type="text" name="BookDesc" value={formData.BookDesc} onChange={handleInputChange} placeholder="Description" />
          <input type="text" name="BookAuthor" value={formData.BookAuthor} onChange={handleInputChange} placeholder="Author" />
          <input type="text" name="BookPrice" value={formData.BookPrice} onChange={handleInputChange} placeholder="Price" />
          <input type="text" name="BookCategory" value={formData.BookCategory} onChange={handleInputChange} placeholder="Category" />
          <input type="text" name="BookPdfLink" value={formData.BookPdfLink} onChange={handleInputChange} placeholder="PDF Link" />

          <button type="submit">{isEditing ? "Update Book" : "Add Book"}</button>
        </form>
      </div>

      <hr />

      {/* Book List Table */}
      <div>
        <table>
          <thead>
            <tr>
              <th>Book Name & Author</th>
              <th>Book Poster</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((bookItem) => (
              <tr key={bookItem._id}>
                <td>
                  <h3>{bookItem.BookName}</h3>
                  <p>{bookItem.BookAuthor}</p>
                </td>
                <td>
                  <img src={bookItem.BookPoster} alt={bookItem.BookName} />
                </td>
                <td>
                  <button onClick={() => handleEditClick(bookItem)}>Update</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(bookItem._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
