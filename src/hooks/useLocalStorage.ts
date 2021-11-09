import { useState } from 'react';

export default function useLocalStorage(key: string, initialValue: null) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);

    try {
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return item || initialValue;
    }
  });

  const setValue = (value: string | null) => {
    setStoredValue(value);
    window.localStorage.setItem(key, value as string);
  };

  return [storedValue, setValue];
}
