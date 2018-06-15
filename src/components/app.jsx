import React, { Component } from 'react';
import FlatList from './flat_list';
import Map from './map';
import flats from '../../data/flats.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats,
      selectedFlat: null
    }
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats}/>
        <Map />
      </div>  
    );
  }
}


export default App;
