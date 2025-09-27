import { useState, useCallback, useEffect } from 'react';

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (
  key: string
) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  }
];

export const useLocalStorage: UseLocalStorage = (key) => {
  const getInitialValue = (): LocalStorageReturnValue => {
    if (typeof window === 'undefined') {
      return null;
    }
    const stored = localStorage.getItem(key);
    return stored !== null ? stored : null;
  };

  const [value, setValue] = useState<LocalStorageReturnValue>(getInitialValue);

  const setItem = useCallback((newValue: LocalStorageSetValue) => {
    localStorage.setItem(key, newValue);
    setValue(newValue);
  }, [key]);

  const removeItem = useCallback(() => {
    localStorage.removeItem(key);
    setValue(null);
  }, [key]);

  useEffect(() => {
    setValue(getInitialValue());
  }, [key]);

  return [value, { setItem, removeItem }];
};
