import React from 'react';
import unsplash from '../api/unsplash';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };
  //this function is used to communicate state between the child and parent component
  //by putting async before the function, it allows us to use the async/await syntax within the function
  //*****
  onSearchSubmit = async (term) => {
    //axios takes two arguments. First argument is the address we want to make a get request to. Second argument is an object with options to customise the GET request, configures the request
    //when you make a request with axios, it returns a promise
    //a Promise is an Object that will give us a notification when some amount of Network work is completed
    //we dont call axios.get because we externalized our axios requests into unsplash.js
    const response = await unsplash.get('/search/photos', {
      //params specifies the different query string parameters we want to add to the request. The end result would be '?query={term}'
      params: { query: term },
      //adds headers to request we are making
      //commented because we exteranlized our request into unsplash.js
      // headers: {
      //   Authorization: '',
      // },

      //below we can handle the promise
      //the arrow function inside is a callback function that will be invoked with whatever data we got back from the API. Data is refered to as response
      //since we use async/await, .then is unnecessary
    });
    // .then((response) => {
    //   console.log(response);
    //   alert(response.data.results[0].urls.full);
    // });
    console.log(response.data.results);

    //when you want to use the async/await syntax, you just put the async word before the method name, find whatever is returning (network request) and put the await keyword before it

    //remember to bind by changing to arrow function! otherwise, expect state errors *****
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ paddingTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
