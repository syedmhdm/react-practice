import logo from "./logo.svg";
import "./App.css";

function App() {
  // for (var i = 1; i <= 3; i++) {
  //   setTimeout(() => {
  //     console.log(i);
  //   }, 1000);
  // }

  function left() {
    return console.log("Hello");
  }

  function right() {
    return console.log(true);
  }

  console.log(left() && right());

  // if (undefined) {
  //   console.log("truthy");
  // } else {
  //   console.log("fals");
  // }

  return (
    <div className='App'>
      {/* <div>{console.log("All unusual ways how react works")}</div> */}
    </div>
  );
}

export default App;
