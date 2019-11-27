import React from 'react';

var BreedsFilter = ({availableBreeds}) => (
    <div>
        <select>
          {availableBreeds.map(breed => (
              <option value={breed}>{breed}</option>
          ))}
        </select>
    </div>
);

export default BreedsFilter;