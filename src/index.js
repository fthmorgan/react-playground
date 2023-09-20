import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => {
  return <section className="booklist">
    <Book />
    <Book />
    <Book />
    <Book />
  </section>
}
const author = 'Jordan Moore';
const Book = () => {
  const title = 'Build the Life You Want: The Art and Science of Getting';
  return (
    <article className="book">
      <img src="https://images-na.ssl-images-amazon.com/images/I/81+MJor-K6L._AC_UL900_SR900,600_.jpg" alt="Build the Life You Want: The Art and Science of Getting" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
