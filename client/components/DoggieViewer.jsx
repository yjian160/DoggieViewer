import React from 'react';
import BreedsFilterContainer from './../containers/BreedsFilterContainer';

import DoggieListContainer from './../containers/DoggieListContainer';

//Beginning component for the application
var DoggieViewer = () => (
    <div>
        <meta name="viewport" content="width=device-width"/>
        <BreedsFilterContainer />
        <DoggieListContainer />
    </div>
)

export default DoggieViewer;