import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => {
  return <section className="booklist">
    <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas consequuntur vitae aliquid non! Aspernatur esse animi dolore, exercitationem numquam dolores sunt quidem recusandae, eveniet iste voluptatum accusamus? Eos, cupiditate?</p>
    </Book>
    <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
  </section>
}

const firstBook = {
  author: 'Jordan Moore',
  title: 'Build the Life You Want: The Art and Science of Getting',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81+MJor-K6L._AC_UL900_SR900,600_.jpg',
};
const secondBook = {
  author: 'Keila Shaheen',
  title: 'The Shadow Work Journal 2nd Edition: a Guide to Integrate and Transcend Your Shadows: The Essential Guidebook for Shadow Work',
  img: 'https://m.media-amazon.com/images/I/61GhbGDD6QL._SY522_.jpg',
};
const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
