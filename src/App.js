import logo from "./logo.svg";
import "./App.css";

function App() {
  for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }

  return (
    <div className='App'>
      {/* <div>{console.log("All unusual ways how react works")}</div> */}
    </div>
  );
}

export default App;
