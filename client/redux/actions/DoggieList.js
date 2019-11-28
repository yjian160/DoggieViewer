import getDoggieListFromAPI from './../../lib/getDoggieListFromAPI';

export const updateDoggieList = (doggieList) => ({
    type: 'UPDATE_DOGGIE_LIST',
    doggieList: doggieList
})

export const getDoggieList = (breed, dispatch) => {
    return getDoggieListFromAPI(breed, (list) => {
        dispatch(updateDoggieList(list));
    })
}