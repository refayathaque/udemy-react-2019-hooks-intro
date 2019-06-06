import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceListWithHooks = ({ resource }) => {
  const [resources, setResources] = useState([]);
  // ^ Initializing state to be an empty array

  const fetchResource = async (resource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

    setResources(response.data);
  }

  useEffect(() => {
    fetchResource(resource)
  }, [resource]);
  // ^ `useEffect` is being called every time this component is rendered, between subsquent renders of this component, if the element in the array (second argument in `useEffect`) is a different value, the arrow function we passed in (first argument in `useEffect`) is going to be called
  // The default value for 'resoource' coming in to this component as props from the parent component is defaulted to 'posts' (as per the initial state in the App component), and when we click on 'todos' in the App component then this componeent is re-rendered with the first element inside ^ array being 'todos'
  // ^ Since 'todos' is different to 'posts', the arrow function in `useEffect` gets called
  // If we call `useEffect` more than once with the same element inside ^ array (say you click on 'posts'/'todos' twice/thrice/etc., in the App component), the arrow function in `useEffect` will not get called because that array element has not changed
  // The value inside ^ array controls whether or not the arrow function gets called
  // Here we are essentially doing what we did in line 15 block of the ResourceList class-based component

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
