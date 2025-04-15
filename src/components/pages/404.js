import React from 'react';
import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from 'react-router-dom';
import './Page404.css'; // Импортируем CSS файл

const Page404 = () => {
  return (
    <div className="error-container">
      <ErrorMessage />
      <p className="error-message">Page does not exist</p>
      <Link to="/" className="back-link">Back to main page</Link>
    </div>
  );
};

export default Page404;
