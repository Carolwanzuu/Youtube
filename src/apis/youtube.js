import axios from 'axios';

const KEY  = 'AIzaSyAM0qsLe7GfjfIj9ZR3nNXTNMlT9FZIxdw'

export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
    params: {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }

});
