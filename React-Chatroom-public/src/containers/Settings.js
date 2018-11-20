import { connect } from 'react-redux';
import Settings from 'src/components/Settings'
import { setUser } from 'src/store/actions';

// Props from state
const mapStateToProps = state => ({
  user: state.user,
});


// Write to state
const mapDispatchToProps = dispatch => ({
  setUser: user => {
    const action = setUser(user);
    dispatch(action);
  }
});

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

export default SettingsContainer;
