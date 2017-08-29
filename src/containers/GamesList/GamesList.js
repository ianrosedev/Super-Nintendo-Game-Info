import { connect } from 'react-redux';
import { setCurrentGame } from '../../reducers/gamesList';
import fullGamesList from '../../static/fullGamesList';
import SearchableGamesList from '../../components/SearchableGamesList/SearchableGamesList';


const mapStateToProps = ({ gamesList }) => ({
  ...gamesList,
  fullGamesList
});

const mapDispatchToProps = {
  setCurrentGame
};

const GamesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchableGamesList);

export default GamesList;
