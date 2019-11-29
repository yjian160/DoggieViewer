import getDoggieListFromAPI from './../../lib/getDoggieListFromAPI';

export const updateDoggieList = (doggieList) => ({
    type: 'UPDATE_DOGGIE_LIST',
    doggieList: doggieList
})

export const appendToDoggieList = (doggieList = []) => ({
    type: 'ADD_TO_DOGGIE_LIST',
    doggieList: doggieList
})

export const getDoggieList = (breed) => {
    return function(dispatch) {
        getDoggieListFromAPI(breed, (list) => {
            dispatch(updateDoggieList(list));
        });
    }
}

export const addToDoggieList = (breed) => {
    return function(dispatch) {
        getDoggieListFromAPI(breed, (list) => {
            dispatch(appendToDoggieList(list));
        });
    }
}