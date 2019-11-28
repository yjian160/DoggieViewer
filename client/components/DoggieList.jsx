import React from 'react';

var DoggieList = (doggieList = []) => (
    <div>
        {doggieList.doggieList.map(d => {
            return <div key={d}>{d}</div>
        })}
    </div>
);

export default DoggieList;