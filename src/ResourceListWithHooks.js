import React from 'react';
import useResources from 'useResources';

const ResourceListWithHooks = ({ resource }) => {
  const resources = useResources(resource)
  // ^ With hooks it becomes much easier to SHARE LOGIC between components, this `useResources` function can be used by another component that might need to access the array of resources based on what prop is being passed into it ('posts'/'todos')
  // So much so that we can send this function over to another file (useResources.js)
  // This function can be referred to as a 'Custom Hook'
  // CODE REUSE! :)

  return (
    <div>
      ResourceListWithHooks
      <ul>
        {resources.map(record => (
          <li key={record.id}>
            {record.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceListWithHooks;

// Notes:

// `useEffect` - Allows a functional component to use 'lifecycle methods'
// ^ Works as a combination of `componentDidMount` and `componentDidUpdate`, `useEffect` will run when the component is first rendereed to the screen (mounted) and also anytime the component is re-rendered after that first time

// * If you call `useEffect` WITHOUT passing in the second argument, `useEffect` will incessantly invoke the arrow function it has as its first argument (same problem we saw in Resource List class-based component before we implemented the `if` block in line 15)
// * If you call `useEffect` with an EMPTY ARRAY as the second argument, `useEffect` will only run once when the component is rendered for the first time (akin to `componentDidMount`)
// ** Everytime we create an Object in JavaScript they are DIFFERENT OBJECTS IN MEMORY, React does the same exact comparison Redux is doing (think of Redux Reducers and how we have to create new Objects/arrays whenever we are updating the Redux store)
// ^ To React, two completely different Objects AND two newly created Objects with the same key-value pair(s) are BOTH DIFFERENT OBJECTS
// ^ In the event that the second argument is the "same" Object as previously passed in, `useEffect` will call its arrow function twice EVEN IF the OBJECT has the SAME VALUE(S) (because the Objects are not the same as the previous time, despite having the same value(s))

// `useEffect` will not work as an `async` function nor can it handle returning Promises

// `useState` - Allows a functional component to use component-level state
