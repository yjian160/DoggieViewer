const DoggieList = (state = [], action) => {
    switch(action.type) {
        case 'UPDATE_DOGGIE_LIST':
            return action.doggieList;
        default:
            return state;
    }
};

export default DoggieList;