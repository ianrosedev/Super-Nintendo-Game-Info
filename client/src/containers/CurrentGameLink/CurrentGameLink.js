import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCurrentGame } from '../../reducers/currentGame';
import GameLink from '../../components/GameLink/GameLink';

const mapDispatchToProps = (dispatch) => ({
  setCurrentGame: bindActionCreators(setCurrentGame, dispatch)
});

const CurrentGameLink = connect(
  null,
  mapDispatchToProps
)(GameLink);

export default CurrentGameLink;
