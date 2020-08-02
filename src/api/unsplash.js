//this file is dedicated to running all the code related to axios
//this makes the App.js component cleaner
import axios from 'axios';

//create method creates an instance of the axios client with some default values
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Y4V5k5g_OKYWQnjEOJQBMwuDhnn4nuIoctAkjStGYi0',
  },
});
