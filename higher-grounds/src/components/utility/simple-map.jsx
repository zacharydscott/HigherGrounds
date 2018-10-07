import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "80vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key:
              "https://www.google.com/maps/dir//Higher+Grounds+Coffee+Shop,+201+New+Market+Centre+%2310,+Boone,+NC+28607/@36.2194922,-81.6650649,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8850fa3b6c379dd5:0x1c18f741382d1286!2m2!1d-81.6628762!2d36.2194879"
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={"Kreyser Avrora"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
