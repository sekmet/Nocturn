import { connect } from 'react-redux';
import Icon        from '../components/icon'

const mapStateToProps = (state) => {
  let activeAccount = state.accounts[state.activeAccountIndex];
  return {
    activeUser: activeAccount && state.userByUserId[activeAccount.id_str],
  }
}

export default connect(mapStateToProps, {})(Icon);
