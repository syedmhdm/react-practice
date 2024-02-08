import { useEffect, useReducer } from "react";

function reducer(prevState, action) {
  if (action.type === "searchData") {
    return {
      ...prevState,
      searchText: action.payload,
      names: prevState.allNames.filter((el) => el.includes(action.payload)),
    };
  }
  if (action.type === "setData") {
    return {
      ...prevState,
      allNames: action.payload,
      names: action.payload,
    };
  }
  return prevState;
}
const initialState = {
  allNames: [],
  names: [],
  searchText: "",
};

export function useUsers() {
  const [{ names, searchText }, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function getData() {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await resp.json();
      dispatch({ type: "setData", payload: data.map((el) => el.name) });
    }
    getData();
  }, []);

  return [{ names, searchText }, dispatch];
}
