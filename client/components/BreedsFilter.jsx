import React from 'react';

//BreedsFilter manages the drop down menu to select which dog breed to filter on
var BreedsFilter = ({breeds, updateSelectedBreed, getDoggieList }) => (
    <div>
        <select onChange={(e) => {
            // Get initial list of random dog images for selected breed
            getDoggieList(e.target.value);
            // Set selected breed state to target
            updateSelectedBreed(e.target.value);
        }}>
            {/* Populate dropdown menu */}
            {breeds.map(breed => (
                <option value={breed} key={breed}>{breed}</option>
            ))}
        </select>
    </div>
);

export default BreedsFilter;