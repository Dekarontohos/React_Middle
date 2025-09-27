import { useReducer, useMemo } from 'react';

export function useToggle(values) {
  const options = useMemo(() => {
    if (Array.isArray(values) && values.length > 0) {
      return values;
    }
    return [true, false];
  }, [values]);

  function reducer(state, action) {
    if (action === undefined) {
      return (state + 1) % options.length;
    }

    const index = options.indexOf(action);
    if (index !== -1) {
      return index;
    }

    return state;
  }

  const [index, dispatch] = useReducer(reducer, 0);
  const value = options[index];
  const toggle = (val) => dispatch(val);

  return [value, toggle];
}
