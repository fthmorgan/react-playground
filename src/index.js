import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
  {
    author: 'Jordan Moore',
    title: 'Build the Life You Want: The Art and Science of Getting',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81+MJor-K6L._AC_UL900_SR900,600_.jpg',
    id: 1
  },
  {
    author: 'Keila Shaheen',
    title: 'The Shadow Work Journal 2nd Edition: a Guide to Integrate and Transcend Your Shadows: The Essential Guidebook for Shadow Work',
    img: 'https://m.media-amazon.com/images/I/61GhbGDD6QL._SY522_.jpg',
    id: 2,
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  const displayTitle = () => {
    console.log(title);

  }
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>display title</button>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
