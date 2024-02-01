import "./App.css";
import SearchComponent from "./SearchComponent";
import { UserContextProvider } from "./usersContext";

// Write a function that get the data from https://jsonplaceholder.typicode.com/users
// List the names alone
// Add an input box to search and filter the list based on the typed text values

function App() {
  console.log("rendering");
  return (
    <div className='App'>
      <UserContextProvider>
        <SearchComponent />
      </UserContextProvider>
    </div>
  );
}

export default App;
