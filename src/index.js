import React from 'react'
import ReactDOM from 'react-dom/client';

// function Greeting() {
//   return (
//     <React.Fragment>
//       <div className="someValue">
//         <h2>My First Component</h2>
//         <ul>
//           <li>
//             <a href="#">hello world</a>
//           </li>
//         </ul>
//       </div>
//     </React.Fragment>
//   );
// }
// function Greeting() {
//   return React.createElement('h2', {}, 'hello world');
// }

function Greeting() {
  return <div>
    <Person />
    <Message />
  </div>;
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
  return <h2>this is my message</h2>;
};


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
