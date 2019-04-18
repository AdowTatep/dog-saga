// Redux
import { connect } from 'react-redux';
import {
  dogRequest
} from './../../redux/modules/dog/actions';

// Components
import DogComponent from './DogComponent';

const mapStateToProps = state => {
  return {
    dog: state.dog.dog,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch(dogRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DogComponent);
