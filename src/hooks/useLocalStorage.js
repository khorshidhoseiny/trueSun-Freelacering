export default function useLocalStorage(key, initialState) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key) || null;
    return storedValue ? JSON.parse(storedValue) : initialState;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
