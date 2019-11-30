const DoggieList = (state = [], action) => {
    switch(action.type) {
        case 'UPDATE_DOGGIE_LIST':
            return action.doggieList;
        case 'ADD_TO_DOGGIE_LIST':
            return Array.from(new Set(state.concat(action.doggieList)))
        default:
            return state;
    }
};

export default DoggieList;