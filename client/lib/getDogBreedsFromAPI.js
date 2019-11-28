import axios from 'axios';

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