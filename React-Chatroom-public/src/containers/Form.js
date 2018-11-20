import { connect } from 'react-redux';

import Form from 'src/components/Form';
import { emitMessage } from 'src/store/actions';

// Props from state
const mapStateToProps = state => ({
  user: state.user,
});

// Write to state.
const mapDispatchToProps = dispatch => ({
  sendMessage: message => {
    const action = emitMessage(message);
    dispatch(action);
  }
});

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default FormContainer;
