import { useEffect } from "react";
import { useState } from "react";

export function useRandomUsers() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(function () {
    async function getAllUsers() {
      const resp = await fetch("https://randomuser.me/api");
      const data = await resp.json();
      setAllUsers((prev) => [...prev, ...data.results]);
    }
    getAllUsers();
  }, []);

  return [allUsers, currentUser, prevUser, nextUser, isLoading];
}
