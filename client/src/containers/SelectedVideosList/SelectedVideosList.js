import { connect } from 'react-redux';
import { fetchVideos } from '../../reducers/selectedVideosList/selectedVideosList';
import VideosList from '../../components/VideosList/VideosList';

const mapStateToProps = ({ selectedVideosList }) => ({
  ...selectedVideosList
});

const mapDispatchToProps = {
  fetchVideos
};

const SelectedVideosList = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideosList);

export default SelectedVideosList;
