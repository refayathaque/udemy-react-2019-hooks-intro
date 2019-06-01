import React, { Component, useState } from 'react';
import ResourceList from 'ResourceList';

// class App extends Component {
//   state = { resource: 'posts', count: 0 }
//   render() {
//     return (
//       <div>
//         <div>
//           <button onClick={() => this.setState({resource: 'posts'})}>Posts</button>
//           <button onClick={() => this.setState({resource: 'todos'})}>Todos</button>
//         </div>
//         {this.state.resource}
//       </div>
//     );
//   };
// };

const App = () => {
  const [resource, setResource] = useState('posts')
  // ^ Array destructuring, works differently from object destructuring because we do not need to have the variable names be the exact properties that we are destructuring out of the object. We can call these variables whatever we want, the order just has to correspond to the array values' indexes
  // ^ `useState` returns an array with two elements inside of it, we are assigning the first element to the variable `resource`, and the second element to the variable `setResource`
  // `resource`/`currentValue` - Contains the present value of the piece of state, same as `this.state.resource` in the class-based component above
  // `useState()` - Function from React
  // `useState('posts')`/`useState(initialValue)` - Starting value for the piece of state, similar to when we initialized our state object in the class-based component above
  const [currentCount, setCount] = useState(0)
  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
        <button onClick={() => setCount(currentCount + 1)}>Increment</button>
      </div>
      <div>
        {resource}
      </div>
      <div>
        {currentCount}
      </div>
    <ResourceList resource={resource} />
    </div>
  );
};

export default App;

// Notes:

// Converting a class-based component into a functional component that can still maintain local component-level state with Hooks' `useState` function

// `useState` Hook can store a single value, it need not store an object like we had to inside class-based components' state
// To maintain multiple state values we will need to `useState` multiple times, instead of having something like `state = { value1: 'hello', value2: 'world' }`
