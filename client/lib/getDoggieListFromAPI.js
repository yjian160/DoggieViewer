import axios from 'axios';

var getDoggieListFromAPI = (breed, callback) => {
    axios.get(`https://dog.ceo/api/breed/${breed}/images`)
        .then((res) => {
            if (callback) {
                console.log(res.data.message);
                callback(res.data.message);
            }
        })
}

export default getDoggieListFromAPI;