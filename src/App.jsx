import React from 'react';
import { useHover } from './hooks/useHover';

function Demo() {
  const { hovered, ref } = useHover();

  return (
    <div ref={ref} style={{ padding: 20, border: '1px solid black', display: 'inline-block' }}>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  );
}

export default Demo;
