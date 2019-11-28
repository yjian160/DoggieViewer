import React from 'react';

var BreedsFilter = ({breeds, updateSelectedBreed, getDoggieList }) => (
    <div>
        <select onChange={(e) => {
            console.log('getDoggieList', getDoggieList)
            getDoggieList(e.target.value);
            updateSelectedBreed(e.target.value);
        }}>
          {breeds.map(breed => (
              <option value={breed} key={breed}>{breed}</option>
          ))}
        </select>
    </div>
);

export default BreedsFilter;