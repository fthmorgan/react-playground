import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => {
  return <section className="booklist">
    <Book author={author} title={title} img={img} />
    <Book author={author} title={title} img={img} />
  </section>
}
const title = 'Build the Life You Want: The Art and Science of Getting';
const author = 'Jordan Moore';
const img = "https://images-na.ssl-images-amazon.com/images/I/81+MJor-K6L._AC_UL900_SR900,600_.jpg";
const Book = (props) => {
  console.log(props)
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
