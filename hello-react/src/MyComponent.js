import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        Hello, My name is {name} <br />
        children is {children} <br />
        My favorite number is {favoriteNumber}
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: 'FREE',
};

export default MyComponent;
