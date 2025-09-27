import { useEffect } from 'react';

export function useWindowEvent(type, listener, options) {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.addEventListener(type, listener, options);

    return () => {
      window.removeEventListener(type, listener, options);
    };
  }, [type, listener, options]);
}
