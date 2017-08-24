import { connect } from 'react-redux';
import { fetchGame } from '../../reducers/gameDetail'
import Article from '../../components/Article/Article';

const mapStateToProps = ({ gameDetail }) => ({
  ...gameDetail
});

const mapDispatchToProps = {
  fetchGame
};

const GameDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);

export default GameDetail;
