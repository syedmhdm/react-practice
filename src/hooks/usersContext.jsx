import { createContext, useContext } from "react";
import { useUsers } from "./useUsers";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [{ names, searchText }, dispatch] = useUsers();

  return (
    <UserContext.Provider
      value={{
        names,
        searchText,
        dispatch,
      }}
    >
      {" "}
      {children}
    </UserContext.Provider>
  );
}

function useUserContext() {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("User context is used outside of user provider");

  return context;
}

export { UserContextProvider, useUserContext };
