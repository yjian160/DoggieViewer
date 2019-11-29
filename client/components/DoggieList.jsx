import React from 'react';
import { useEffect } from 'react';

var DoggieList = ({doggieList, selectedBreed, addToDoggieList}) => {

    function handleScroll() {
        console.log(window.pageYOffset, window.innerHeight, document.body.scrollTop, document.documentElement.scrollTop, document.documentElement.offsetHeight)
        if (window.innerHeight + document.body.scrollTop === document.documentElement.offsetHeight
            || window.innerHeight + window.pageYOffset === document.documentElement.offsetHeight)
        addToDoggieList(selectedBreed);
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (<div>
        <table style={(doggieList.length <= 0) ? {} : {'border': '1px solid black'}}>
            <tbody>
                {doggieList.map(dog => (
                        <tr>
                            <td style={{'border': '1px solid black', 'margin': '50'}}>
                                <div>
                                    <img src={dog} style={{height: '100', width: '100'}}></img>
                                </div>
                            </td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    </div>);
};

export default DoggieList;