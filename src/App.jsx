import React from 'react';
import { useViewportSize } from './hooks/useViewportSize';

function Demo() {
  const { width, height } = useViewportSize();

  return (
    <div>
      Width: {width}, height: {height}
    </div>
  );
}

export default Demo;
