import React, { useState, useEffect } from 'react';

function Clicker() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Anda sudah Click me ${count} kali`;
  });

  return (
    <button onClick={() => setCount(count + 1)}>Click me ... {count}</button>
  )
}



export default Clicker;