/*
1. create a custom react hook to fetch users from an API (https://randomuser.me/api) and display their picture and name on the page one
2. It must return the list of users, the current user, a function to fetch the next user and a function to move back to the previous user
3. Test the custom react hook in the index.js (tsx - later)
*/

import { useRandomUsers } from "./hooks/useRandomUsers";

function App() {
  const [allUsers, currentUser, prevUser, nextUser, isLoading] =
    useRandomUsers();

  return (
    <div>
      {allUsers.map((el, i) => (
        <div key={i}>{`${el.name.title} ${el.name.first} ${el.name.last}`}</div>
      ))}
      {!isLoading ? (
        <div>
          <img src={currentUser.picture.large} alt='random user' />
          <p>{`${currentUser.name.title} ${currentUser.name.first} ${currentUser.name.last}`}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <button onClick={prevUser}>Prev User</button>
      <button onClick={nextUser}>Next User</button>
    </div>
  );
}

export default App;
