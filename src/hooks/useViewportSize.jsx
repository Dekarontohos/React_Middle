import { useState, useCallback } from 'react';
import { useWindowEvent } from './useWindowEvent';

export function useViewportSize() {
  const getSize = useCallback(() => {
    if (typeof window === 'undefined') {
      return { width: 0, height: 0 };
    }
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }, []);

  const [size, setSize] = useState(getSize);

  const handleResize = () => {
    setSize(getSize());
  };

  useWindowEvent('resize', handleResize);

  return size;
}
