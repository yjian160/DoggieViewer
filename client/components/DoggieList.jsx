import React from 'react';
import { useEffect } from 'react';

var DoggieList = ({doggieList, selectedBreed, addToDoggieList}) => {

    function handleScroll() {
        console.log(document.body.scrollTop, document.documentElement.scrollTop, window.pageYOffset)
        if (window.innerHeight + document.body.scrollTop >= document.body.scrollHeight
            || window.innerHeight + document.documentElement.scrollTop >= document.body.scrollHeight
            || window.innerHeight + window.pageYOffset >= document.body.scrollHeight)
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