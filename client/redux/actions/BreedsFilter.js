import getDogBreedsFromAPI from './../../lib/getDogBreedsFromAPI';

export const updateAvailableBreedsList = (availableBreeds) => ({
    type: 'UPDATE_AVAILABLE_BREEDS_LIST',
    availableBreeds: availableBreeds
});

export const updateSelectedBreed = (breed) => ({
    type: 'UPDATE_SELECTED_BREED',
    selectedBreed: breed
})

export const getAvailableBreeds = (dispatch) => {
    return getDogBreedsFromAPI((breeds) => {
        dispatch(updateAvailableBreedsList(breeds));
    })
}