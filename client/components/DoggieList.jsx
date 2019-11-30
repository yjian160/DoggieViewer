import React from 'react';
import { useEffect } from 'react';

//DoggieList manages which dog images to display
var DoggieList = ({doggieList, selectedBreed, addToDoggieList}) => {

    //Trigger to add more images when user scrolls to the bottom
    function handleScroll() {
        if (window.innerHeight + document.body.scrollTop >= document.body.scrollHeight - 10
            || window.innerHeight + document.documentElement.scrollTop >= document.body.scrollHeight - 10
            || window.innerHeight + window.pageYOffset >= document.body.scrollHeight - 10)
        addToDoggieList(selectedBreed);
    }
    
    //Add event listener to handle infinite scroll
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