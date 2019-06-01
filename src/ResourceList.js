import React, { Component } from 'react';
import axios from 'axios';

class ResourceList extends Component {
  state = { resources: [] };

  async componentDidMount() {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)

    this.setState({ resources: response.data })
  }

  async componentDidUpdate(prevProps) {
    console.log(prevProps.resource)
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)

      this.setState({ resources: response.data })
    }
  }

  render() {
    return (
      <div>
        ResourceList
        <div>
          {this.state.resources.length}
        </div>
      </div>
    );
  };
};

export default ResourceList;

// Notes:

// Problem with `componentDidMount` lifecycle method
// When we click 'todos' in the parent App component, App updates its state, rerenders itself AND this ResourceList component, but since the ResourceList component was already mounted ('mounted' - the component has ALREADY BEEN RENDERED to the screen ONE TIME, every time a class-based componennt is re-rendered, the `componentDidMount` lifecycle method is NOT CALLED A SECOND TIME) `componentDidMount` is not called a second time with the updated `this.props.resource` (which now is 'todos' instead of 'posts')

// One way to get around ^ problem is by using `componentDidUpdate` in conjunction with `componentDidMount` to make all subsequent API calls, because `componentDidUpdate` will be invoked anytime the local component-level state is updated (through `setState` or updated props coming in from a parent component)
// ^ Massive problem with this however, since we are using `setState` in `componentDidUpdate`, it will endlessly invoke itself (every time we invoke it we are updating the state with `setState`, and that triggers the lifecycle method to get invoked AGAIN because it is changing the local state!)
// ^ Workaround is to ONLY make the API call (and `setState`) when the incoming props from the parent App component (`this.props.resource`) changes (i.e., when `prevProps` !== `this.props.resource`)

// * `componentDidUpdate` will get invoked twice for every `this.props.resource` change because right after `setState` is called this component gets re-rendered
// BUT the if block will prevent the API call (with `setState`) from running again as `prevProps` === `this.props.resource`
