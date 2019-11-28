import React from 'react';
import BreedsFilterContainer from './../containers/BreedsFilterContainer';
import DoggieListContainer from './../containers/DoggieListContainer';
var DoggieViewer = () => (
    <div>
        <BreedsFilterContainer />
        <DoggieListContainer />
    </div>
)

export default DoggieViewer;