/*
1. create a custom react hook to fetch users from an API (https://randomuser.me/api) and display their picture and name on the page one
2. It must return the list of users, the current user, a function to fetch the next user and a function to move back to the previous user
3. Test the custom react hook in the index.js (tsx - later)
*/

import { useRandomUsers } from "./hooks/useRandomUsers";

function App() {
  useRandomUsers();
  return <div>App</div>;
}

export default App;
