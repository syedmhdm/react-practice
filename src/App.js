import { useEffect, useState } from "react";
import "./App.css";

// Write a function that get the data from https://jsonplaceholder.typicode.com/users
// List the names alone
// Add an input box to search and filter the list based on the typed text values

function App() {
  const [names, setNames] = useState([]);
  const [searchText, setSearchText] = useState("");

  function searchHandler(e) {
    setSearchText(e.target.value);
  }

  useEffect(function () {
    async function getData() {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await resp.json();
      setNames(data.map((el) => el.name));
    }
    getData();
  }, []);

  const namesFiltered = names.filter((el) => el.includes(searchText));

  return (
    <div className='App'>
      <input value={searchText} onChange={searchHandler} />
      {namesFiltered.map((el) => (
        <p key={el}>{el}</p>
      ))}
    </div>
  );
}

export default App;
