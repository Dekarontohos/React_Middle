import { useReducer, useMemo, useCallback } from 'react';

export function useToggle(values) {
  const options = useMemo(() => {
    if (Array.isArray(values) && values.length > 0) {
      return values;
    }
    return [true, false];
  }, [values]);

  const reducer = useCallback((state, action) => {
    if (typeof action === 'undefined') {
      return (state + 1) % options.length;
    }

    const index = options.indexOf(action);
    if (index !== -1) {
      return index;
    }

    return state;
  }, [options]);

  const [index, dispatch] = useReducer(reducer, 0);
  const value = options[index];

  const toggle = useCallback((val) => dispatch(val), [dispatch]);

  return [value, toggle];
}
