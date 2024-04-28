import { useEffect, useState } from "react";

export default function useLocalStorageState(key, initialState) {
  const [value, setValue] = useState(() => {
    const stateValue = localStorage.getItem(key || null);
    return stateValue ? JSON.parse(stateValue) : initialState;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
