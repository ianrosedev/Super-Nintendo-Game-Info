import { connect } from 'react-redux';
import { setCurrentGame } from '../../reducers/currentGame/currentGame';
import GameLink from '../../components/GameLink/GameLink';

const mapDispatchToProps = {
  setCurrentGame,
};

const CurrentGameLink = connect(
  null,
  mapDispatchToProps
)(GameLink);

export default CurrentGameLink;
