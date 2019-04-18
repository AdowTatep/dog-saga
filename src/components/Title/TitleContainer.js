// Redux
import { connect } from 'react-redux';

// Components
import TitleComponent from './TitleComponent';

const mapStateToProps = state => {
  return {
    fetching: state.dog.fetching,
    error: state.dog.error
  };
};

export default connect(mapStateToProps)(TitleComponent);
