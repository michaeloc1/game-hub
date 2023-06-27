import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6a7663290c7f4a02bb79c455894bb426'
    }
})