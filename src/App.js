import './App.css';
import image from './shopping.JPG';
import imageTwo from './man.JPG';
import { GroceryList } from './GroceryList.js';

function App() {
  return (
    <div className="app">
      <div className="container">
      <img src={ image } width="200px" alt="shopping"/>
      </div>
      <div className="container">
      <h1>Grocery List</h1>
      </div>
      <GroceryList/> 
      <div className="container">
      <img src={ imageTwo } width="200px" alt="man"/>
      </div>
    </div>
  );
}

export default App;

