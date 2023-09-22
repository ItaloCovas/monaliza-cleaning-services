import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader
} from '@react-google-maps/api';
import { useState } from 'react';

export function Map() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyADknkXBLCKflOEV1netOfXEwDj5ehSvNI'
  });

  const initialMarkers = [
    {
      position: {
        lat: 41.764513,
        lng: -72.197184
      },
      label: { color: 'white', text: 'P1' },
      draggable: true
    }
  ];

  const [activeInfoWindow, setActiveInfoWindow] = useState(null);
  const [markers, setMarkers] = useState(initialMarkers);

  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 41.764513,
    lng: -72.197184
  };

  const mapClicked = (event: google.maps.MapMouseEvent) => {
    console.log(event?.latLng?.lat(), event?.latLng?.lng());
  };

  const markerClicked = (marker, index) => {
    setActiveInfoWindow(index);
    console.log(marker, index);
  };

  const markerDragEnd = (event, index) => {
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
            onClick={(event: google.maps.MapMouseEvent) =>
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
