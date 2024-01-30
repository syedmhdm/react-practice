import { useReducer } from "react";

const initialState = {
  items: [],
  count: 0,
  content: "",
};

function reducer(prevState, action) {
  if (action.type === "additem") {
    return {
      ...prevState,
      items: [...prevState.items, action.payload],
      count: prevState.items.length + 1,
    };
  }
  return prevState;
}

function BasicComp() {
  const [{ items, count, content }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <button
        onClick={() =>
          dispatch({ type: "additem", payload: { item: "first item" } })
        }
      >
        add item
      </button>
      <div>
        Items:{" "}
        {items.map((el, i) => (
          <p key={i}>{el.item}</p>
        ))}
      </div>
      <div>Count: {count}</div>
      <div>Content: {content}</div>
    </div>
  );
}

export default BasicComp;
