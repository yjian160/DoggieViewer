import axios from 'axios';

//Query the dog.ceo API for list of available breeds
var getDogBreedsFromAPI = (callback) => {
    axios.get('https://dog.ceo/api/breeds/list/all')
        .then((res) => {
            if (callback) {
                let keys = Object.keys(res.data.message);
                callback(keys)
            }
        })
}

export default getDogBreedsFromAPI;