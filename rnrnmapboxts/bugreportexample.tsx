import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Mapbox from '@rnmapbox/maps';

const App = () => {
  const markers = [
    { coordinate: [12.338, 45.4385], key: 'k1' },
    { coordinate: [10.338, 47.4385], key: 'k2' },
    { coordinate: [8.338, 43.4385], key: 'k3' },
  ];

  return (
    <Mapbox.MapView style={{ flex: 1 }}>
      <Mapbox.Camera zoomLevel={5} centerCoordinate={[12.338, 45.4385]} />
      {/* Rendering Markers */}
      {markers.map((marker) => (
        <Mapbox.MarkerView
          coordinate={marker.coordinate}
          allowOverlap
          key={marker.key}
        >
          <TouchableOpacity
            onPress={() => console.log('pressed', marker.coordinate)}
          >
            <View style={{ width: 10, height: 10, backgroundColor: 'red' }} />
          </TouchableOpacity>
        </Mapbox.MarkerView>
      ))}
    </Mapbox.MapView>
  );
};

export default App;