import { memo, useEffect, useRef, useState } from "react";
import styles from "./Child.module.css";

function Child({ pCount }) {
  // let count = useRef(0);
  const [count, setCount] = useState(0);
  // const [_, setRerender] = useState(false);

  function handleButtonClick() {
    // count.current = count.current + 1;
    // console.log(count);
    setCount((prev) => {
      const helper = prev + 1;
      pCount(helper);
      return helper;
    });
  }

  console.log("child rerender");

  return (
    <div>
      <button className={styles.childbutton} onClick={handleButtonClick}>
        change
      </button>
      {/* <button onClick={() => setRerender((prev) => !prev)}>rerender</button> */}
      {/* {count.current} */}
      {count}
    </div>
  );
}

export default memo(Child);
