import { connect } from 'react-redux';
import DoggieList from './../components/DoggieList.jsx'

var mapStateToProps = (state) => ({
    doggieList: state.DoggieList 
});

var mapDispatchToProps = (dispatch) => ({
    
});

const DoggieListContainer = connect(mapStateToProps, mapDispatchToProps)(DoggieList);
export default DoggieListContainer;