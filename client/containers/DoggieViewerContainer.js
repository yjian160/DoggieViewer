import { connect } from 'react-redux';
import DoggieViewer from './../components/DoggieViewer.jsx';
import { getDoggieList } from './../redux/actions/DoggieList';

var mapStateToProps = (state) => ({
    
});

var mapDispatchToProps = (dispatch) => ({
});

const DoggieViewerContainer = connect(mapStateToProps, mapDispatchToProps)(DoggieViewer);
export default DoggieViewerContainer;