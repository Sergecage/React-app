import logo from './logo.svg';
import React, { useState} from 'react';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import './App.css';

const App = () => {
  const [items, setItems] = useState(["Debit", "Credit"]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className='App'>
      <h1>Item List</h1>
      <ItemList items={items} />
      <AddItem addItem={addItem} />
    </div>
  );
};

export default App;
