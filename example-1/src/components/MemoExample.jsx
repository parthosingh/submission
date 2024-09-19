// React.memo is a higher-order component that wraps a functional component to memoize it. It prevents re-rendering when props haven’t changed, thus optimizing performance.

import React, { useState } from 'react';

const ExpensiveComponent = React.memo(({ count }) => {
  console.log("Rendered ExpensiveComponent");
  return <div>Count: {count}</div>;
});

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div>
      <ExpensiveComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type name"
      />
    </div>
  );
};

export default App;
