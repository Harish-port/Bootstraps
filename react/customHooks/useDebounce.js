///PRevents unncessary API calls or state updates while typing

import { useState, useEffect } from "react";

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;

// usage

const Component = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 1000);
  return <></>;
};
