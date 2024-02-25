import { createContext, useContext } from "react";
import { useRandomUsers } from "../hooks/useRandomUsers";

const RandomUserContext = createContext();

function RandomUserContextProvider({ children }) {
  const [allUsers, currentUser, prevUser, nextUser, isLoading] =
    useRandomUsers();

  return (
    <RandomUserContext.Provider
      value={{ allUsers: allUsers, currentUser, prevUser, nextUser, isLoading }}
    >
      {children}
    </RandomUserContext.Provider>
  );
}

function useRandomUsersContext() {
  const context = useContext(RandomUserContext);
  if (context === undefined)
    throw new Error(
      "RandomUserContext can not be used outside of RandomUserContextProvider"
    );
  return context;
}

export { RandomUserContextProvider, useRandomUsersContext };
