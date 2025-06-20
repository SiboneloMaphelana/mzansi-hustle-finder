import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { demoHustles } from '../hustles';

export const MapScreen = () => (
  <MapView
    style={{ flex: 1 }}
    initialRegion={{
      latitude: -26.2,
      longitude: 28.0,
      latitudeDelta: 1,
      longitudeDelta: 1,
    }}
  >
    {demoHustles.map(h => (
      <Marker
        key={h.id}
        coordinate={h.coords}
        title={h.name}
        description={h.suburb}
      />
    ))}
  </MapView>
);
