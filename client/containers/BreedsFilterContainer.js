import { connect } from 'react-redux';
import BreedsFilter from './../components/BreedsFilter.jsx';
import { updateAvailableBreedsList, updateSelectedBreed} from './../redux/actions/BreedsFilter'
import { getDoggieList } from './../redux/actions/DoggieList'

var mapStateToProps = (state) => ({
    selectedBreed: state.BreedsFilter.selectedBreed,
    breeds: state.BreedsFilter.breeds
});

var mapDispatchToProps = (dispatch) => ({
    updateAvailableBreedsList: (breeds) => {
        dispatch(updateAvailableBreedsList(breeds))
    },
    updateSelectedBreed: (breed) => {
        dispatch(updateSelectedBreed(breed))
    },
    getDoggieList: (breed) => {
        dispatch(getDoggieList(breed, dispatch));
    }
});

const BreedsFilterContainer = connect(mapStateToProps, mapDispatchToProps)(BreedsFilter);
export default BreedsFilterContainer;