import { useEffect } from "react";
import { useState } from "react";

export function useRandomUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const [curUserIndex, setCurUserIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  function prevUser() {
    if (curUserIndex > 0) {
      setCurUserIndex((prev) => prev - 1);
    }
  }
  function nextUser() {
    if (curUserIndex === allUsers.length - 1) {
      getUsers();
      setCurUserIndex((prev) => prev + 1);
    } else {
      setCurUserIndex((prev) => prev + 1);
    }
  }

  async function getUsers() {
    setIsLoading(true);
    const resp = await fetch("https://randomuser.me/api");
    const data = await resp.json();
    setIsLoading(false);
    setAllUsers((prev) => [...prev, ...data.results]);
  }

  useEffect(
    function () {
      if (allUsers.length === 0) {
        getUsers();
      }
    },
    [allUsers.length]
  );

  return [allUsers, allUsers[curUserIndex], prevUser, nextUser, isLoading];
}
