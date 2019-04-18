import React from 'react';
import PropTypes from 'prop-types';

const TitleComponent = props => {
  const title = props.error ? props.error.message : props.fetching ? 'Fetching...' : 'Keep clicking for new dogs';

  return <h1 className="App-title" style={props.error ? { color: 'red' } : null}>{title}</h1>;
};

TitleComponent.propTypes = {
  error: PropTypes.object,
  fetching: PropTypes.bool.isRequired
};

export default TitleComponent;
