import { connect } from 'react-redux';
import {
  updateQuery,
  clearQuery,
} from '../../reducers/searchableGamesList/searchableGamesList';
import GamesList from '../../components/GamesList/GamesList';

const mapStateToProps = ({ searchableGamesList }) => ({
  ...searchableGamesList,
});

const mapDispatchToProps = {
  updateQuery,
  clearQuery,
};

const SearchableGamesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(GamesList);

export default SearchableGamesList;
