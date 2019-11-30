import axios from 'axios';

//Query the dog.ceo API for 10 random images for a specific breed
var getDoggieListFromAPI = (breed, callback) => {
    axios.get(`https://dog.ceo/api/breed/${breed}/images/random/10`)
        .then((res) => {
            if (callback) {
                callback(res.data.message);
            }
        })
        .catch((err) => {
            console.log('no results for selected breed')
            if (callback) {
                callback([]);
            }
        })
}

export default getDoggieListFromAPI;