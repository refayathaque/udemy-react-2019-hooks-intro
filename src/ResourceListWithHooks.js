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
  // ^ `useEffect` is being called every time this component is being rendered, between subsquent renders of this componeent, if the elements in the array (second arguyment in `useEffect`) is differeent, the arrow function we passed in (first argument in `useEffect`) is going to be called
  // The default value for 'resoource' coming in as props from the parent component is defaulted to 'posts' (initial state in the App component), when we click on 'todos' in the App component then this componeent is re-rendered and the first element inside ^ array is 'todos', since 'todos' is diffeernt from 'posts', the arrow function in `useEffect` gets called
  // If we call `useEffect` twice in a row with the same element inside ^ array (click on 'posts'/'todos' twice ein the App component), the arrow function will not get called because that element has not changed
  // We are essentially doing what we did in line 15 of ResourceList

  return (
    <div>
      ResourceListWithHooks
      <div>
        {resources.length}
      </div>
    </div>
  );
};

export default ResourceListWithHooks;

// Notes:

// `useEffect` - Allows a functional component to use 'lifecycle methods'
// ^ Essentially works as a combination of `componentDidMount` and `componentDidUpdate`, `useEffect` will run when the component is first rendereed to the screen (mounted) and anytime the component is re-rendered after that first time
// `useState` - Allows a functional component to use component-level state
