import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker'

class Map extends Component {
  // constructor(props) = {
  //   super(props);
  //
  //   this.state = {
  //   }
  // }

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div className='map-container'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAK2GxhKdB8sU5su4E-nYZ7q2qSYblnKjQ' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={59.955413}
            lng={30.337844}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map;
