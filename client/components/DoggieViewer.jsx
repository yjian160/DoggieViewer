import React from 'react';
import BreedsFilter from './BreedsFilter.jsx'

var DoggieViewer = () => (
    <div>
        <BreedsFilter availableBreeds={['a','b','c']}/>
    </div>
)

export default DoggieViewer;