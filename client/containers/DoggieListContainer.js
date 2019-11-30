import { connect } from 'react-redux';
import DoggieList from './../components/DoggieList.jsx'
import { addToDoggieList } from './../redux/actions/DoggieList'


var mapStateToProps = (state) => {
    return ({
    doggieList: state.DoggieList,
    selectedBreed: state.BreedsFilter.selectedBreed
})};

var mapDispatchToProps = (dispatch) => ({
    addToDoggieList: (breed) => {
        dispatch(addToDoggieList(breed, dispatch));
    }
});

const DoggieListContainer = connect(mapStateToProps, mapDispatchToProps)(DoggieList);
export default DoggieListContainer;