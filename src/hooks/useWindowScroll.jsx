import { useState, useCallback } from 'react';
import { useWindowEvent } from './useWindowEvent';

export function useWindowScroll() {
  const [scroll, setScroll] = useState({
    x: typeof window !== 'undefined' ? window.scrollX : 0,
    y: typeof window !== 'undefined' ? window.scrollY : 0,
  });

  const onScroll = useCallback(() => {
    setScroll({
      x: window.scrollX,
      y: window.scrollY,
    });
  }, []);

  useWindowEvent('scroll', onScroll);

  const scrollTo = useCallback(({ x = scroll.x, y = scroll.y }) => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: y,
        left: x,
        behavior: 'auto',
      });
    }
  }, [scroll]);

  return [scroll, scrollTo];
}
