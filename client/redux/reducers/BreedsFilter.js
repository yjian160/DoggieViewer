const BreedsFilter = (state = {'selectedBreed': 'Select a breed', 'breeds': ['Select a breed']}, action) => {
    switch(action.type) {
        case 'UPDATE_AVAILABLE_BREEDS_LIST':
            return Object.assign({}, state, {breeds: state.breeds.concat(action.availableBreeds)});
        case 'UPDATE_SELECTED_BREED':
            return Object.assign({}, state, {selectedBreed: action.selectedBreed});
        default:
            return state;
    }
};

export default BreedsFilter;