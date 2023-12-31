/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader
} from '@react-google-maps/api';
import { useState } from 'react';

export function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyADknkXBLCKflOEV1netOfXEwDj5ehSvNI'
  });

  const initialMarkers = [
    {
      position: {
        lat: 41.779416,
        lng: -72.513503
      },
      label: { color: 'white', text: 'P1' },
      draggable: true
    }
  ];

  const [activeInfoWindow, setActiveInfoWindow] = useState(null);
  const [markers] = useState(initialMarkers);

  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 41.779416,
    lng: -72.513503
  };

  const mapClicked = (event: google.maps.MapMouseEvent) => {
    console.log(event?.latLng?.lat(), event?.latLng?.lng());
  };

  const markerClicked = (marker: any, index: any) => {
    setActiveInfoWindow(index);
    console.log(marker, index);
  };

  const markerDragEnd = (event: any, _index: any) => {
    console.log(event.latLng.lat(), event.latLng.lng());
  };

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onClick={mapClicked}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            label={marker.label}
            draggable={marker.draggable}
            onDragEnd={(event) => markerDragEnd(event, index)}
            onClick={(_event: google.maps.MapMouseEvent) =>
              markerClicked(marker, index)
            }
          >
            {activeInfoWindow === index && (
              <InfoWindow
                position={marker.position}
                onCloseClick={() => setActiveInfoWindow(null)}
              >
                <b>
                  {marker.position.lat}, {marker.position.lng}
                </b>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    )
  );
}
