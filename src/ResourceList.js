import React, { Component } from 'react';

class ResourceList extends Component {
  render() {
    return (
      <div>
        ResourceList
        <div>
          {this.props.resource}
        </div>
      </div>
    );
  };
};

export default ResourceList;
