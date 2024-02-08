import { useUsers } from "./useUsers";
import { useUserContext } from "./usersContext";

function SearchComponent() {
  // const [{ names, searchText }, dispatch] = useUsers();
  const { names, searchText, dispatch } = useUserContext();
  return (
    <>
      <input
        value={searchText}
        onChange={(e) =>
          dispatch({ type: "searchData", payload: e.target.value })
        }
      />
      {names?.map((el, i) => (
        <p key={i}>{el}</p>
      ))}
    </>
  );
}

export default SearchComponent;
