import Child from "./Child";

function App2() {
  console.log("test");

  function handleButtonClick(e) {
    e.preventDefault();
    console.log("test");
    return false;
  }

  const tt = <Child />;

  return (
    <form>
      <input />
      <button onClick={handleButtonClick}>button</button>
      app 2{tt}
    </form>
  );
}

export default App2;
