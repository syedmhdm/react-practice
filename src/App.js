import "./App.css";
import { useUsers } from "./useUsers";

// Write a function that get the data from https://jsonplaceholder.typicode.com/users
// List the names alone
// Add an input box to search and filter the list based on the typed text values

function App() {
  const [{ names, searchText }, dispatch] = useUsers();

  console.log("rendering");
  return (
    <div className='App'>
      <input
        value={searchText}
        onChange={(e) =>
          dispatch({ type: "searchData", payload: e.target.value })
        }
      />
      {names?.map((el, i) => (
        <p key={i}>{el}</p>
      ))}
    </div>
  );
}

export default App;
