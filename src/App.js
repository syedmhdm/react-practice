import BasicComp from "./BasicComp";
import withButtons from "./patterns/withButtons";

function App() {
  // const ContentWithHundred = withButtons(<BasicComp />);
  return (
    <div className='App'>
      {/* <ComponentRenderProps
        render={(joke) => (
          <div>
            <h6>setup: {joke.setup}</h6>
            <h3>punchline: {joke.punchline}</h3>
            <p>{joke.type}</p>
          </div>
        )}
      /> */}
      {/* <ContentWithHundred items={"tes"} count={"33"} content={"sdff"} /> */}
    </div>
  );
}

export default App;
