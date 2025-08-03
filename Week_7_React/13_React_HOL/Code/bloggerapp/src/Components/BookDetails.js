import React, { useState } from 'react';

const BookDetails = () => {
  const [isAvailable, setIsAvailable] = useState(true);

  const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 299
  };

  // Conditional rendering using if-else statements
  if (!book) {
    return <div>No book data available</div>;
  }

  return (
    <div className="book-details">
      <h2>Book Details</h2>
      <div className="book-card">
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Price: ₹{book.price}</p>
        
        {/* Conditional rendering using ternary operator */}
        <p>Status: {isAvailable ? "Available" : "Out of Stock"}</p>

        {/* Conditional rendering using logical AND */}
        {book.price < 500 && <p>💰 Good Deal!</p>}

        <button onClick={() => setIsAvailable(!isAvailable)}>
          Toggle Availability
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
