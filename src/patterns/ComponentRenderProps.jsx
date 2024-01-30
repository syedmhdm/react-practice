import { useEffect, useState } from "react";

function ComponentRenderProps({ render }) {
  const [jokes, setJokes] = useState([]);

  useEffect(function () {
    async function getJokes() {
      const resp = await fetch(
        `https://official-joke-api.appspot.com/jokes/ten`
      );
      const data = await resp.json();
      setJokes(data);
    }
    getJokes();
  }, []);

  return <div>{jokes.map(render)}</div>;
}

export default ComponentRenderProps;
