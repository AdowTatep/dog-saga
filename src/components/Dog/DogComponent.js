import React from 'react';
import PropTypes from 'prop-types';

const DogComponent = props => (
  <img src={props.dog || props.logo} className="App-logo" alt="logo" onClick={props.onRequestDog} />
);

DogComponent.propTypes = {
  dog: PropTypes.string,
  logo: PropTypes.any.isRequired,
  onRequestDog: PropTypes.func.isRequired,
};

export default DogComponent;
