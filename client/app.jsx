import React from 'react';
import ReactDOM from 'react-dom';

import DoggieViewerContainer from './containers/DoggieViewerContainer';

import { Provider } from 'react-redux';
import store from './redux/store/store';
import { getAvailableBreeds } from './redux/actions/BreedsFilter';
import { getDoggieList } from './redux/actions/DoggieList';

ReactDOM.render(<Provider store={store}><DoggieViewerContainer /></Provider>, 
    document.getElementById('app'), 
    () => {
        getAvailableBreeds(store.dispatch);
        getDoggieList(store.getState().BreedsFilter.selectedBreed, store.dispatch);
    }
);