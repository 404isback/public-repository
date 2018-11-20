import { connect } from 'react-redux';
import Messages from 'src/components/Messages'

// Read from state.
const mapStateToProps = state => ({
    messages: state.messages,
});

const MessagesContainer = connect(
  mapStateToProps
)(Messages);

export default MessagesContainer;
