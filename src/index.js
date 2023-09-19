import React from 'react'
import ReactDOM from 'react-dom/client';

function Greeting() {
  return (
    <React.Fragment>
      <div className="someValue">
        <h2>My First Component</h2>
        <ul>
          <li>
            <a href="#">hello world</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
// function Greeting() {
//   return React.createElement('h2', {}, 'hello world');
// }

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
