import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateQuery } from '../../reducers/searchableGamesList';
import GamesList from '../../components/GamesList/GamesList';

const mapStateToProps = ({ searchableGamesList }) => ({
  ...searchableGamesList
});

const mapDispatchToProps = (dispatch) => ({
  updateQuery: bindActionCreators(updateQuery, dispatch)
});

const SearchableGamesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(GamesList);

export default SearchableGamesList;
