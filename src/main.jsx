import { createRoot } from  'react-dom/client';

/** Example of JavaScript Expression
 
  const desc = "I'm reviewing JSX and React because of Unit 10"
  const myTitleId = "main-title"
  const name = "Laura"

  const element = (
    <>
      <h1 id={myTitleId}>{name}'s first React Element!</h1>
      <p className='main-desc'>{desc}</p>
      <input value={10 * 20}/>
    </>
  );

*/

const Header = () => (
  <header>
    <h1>Grocery List</h1>
    <span className='total-items'>Items: 1</span>
  </header>
);

const root = createRoot(document.getElementById('root'));
root.render(<Header />);