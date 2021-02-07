import React, { useState, ChangeEvent } from 'react';
import Filtered from './components/Filtered'
import Other from './components/Other'
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [friends, setFriends] = useState<string[]>([])

  const changeSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.currentTarget.value)
  }

  const submitHandler = (event: any) => {
    event.preventDefault();
    setFriends([...friends, event.currentTarget[0].value]);
    event.currentTarget.reset();
  }

  return (
    <div className="App">
      <label htmlFor = "query">Enter your search query:</label>
      <input
        type = "text"
        name = "query"
        value = {searchQuery}
        onChange = {changeSearchQuery}
      />

      <h2>Add A Friend</h2>
      <form onSubmit = {submitHandler}>
        <label htmlFor = "addName">Name: </label>
        <input 
          type = "text"
          name = "addName"
          defaultValue = ""
        />
        <button type = "submit">Add</button>
      </form>

      <Filtered 
        query = {searchQuery}
        friends = {friends}
      />
      <Other 
        query = {searchQuery}
        friends = {friends}
      />
    </div>
  );
}

export default App;
