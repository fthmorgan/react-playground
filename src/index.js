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

const Book = () => {
  return <article className="book">
    <Image />
    <Title />
    <Author />
  </article>
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/81+MJor-K6L._AC_UL900_SR900,600_.jpg" alt="Build the Life You Want: The Art and Science of Getting" />
const Title = () => <h2>Build the Life You Want: The Art and Science of Getting</h2>
const Author = () => {
  return <h4>Arthur C. Brooks</h4>;
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
