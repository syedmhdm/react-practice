import { useState } from "react";

function withButtons(WrappedComponent) {
  return function ButtonsFunctionality(props) {
    const [isHundred, setIsHundred] = useState(false);

    const somePassedValues = isHundred ? props.items : props.count + 100;

    return (
      <div>
        <button onClick={(e) => setIsHundred((prev) => !prev)}>
          toggle 100
        </button>
        <button>button 2</button>
        <button>button 3</button>
        <WrappedComponent content={somePassedValues} />
      </div>
    );
  };
}

export default withButtons;
