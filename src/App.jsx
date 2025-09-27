import React from 'react';
import { useWindowScroll } from './hooks/useWindowScroll';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div style={{ height: '200vh', padding: 20, marginTop: scroll.y, marginRight: scroll.x }}>
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
  );
}

export default Demo;
