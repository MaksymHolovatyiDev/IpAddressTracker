import MapView, { Marker } from 'react-native-maps';
import { SvgXml } from 'react-native-svg';

import { locationImg } from '@assets/icons/svg';
import { styles } from './Map.styled';
import { useIPTracker } from 'components/IPTrackerProvider/IPTrackerProvider';

export default function Map() {
  const {
    MainUserData: { lat, lng, location },
  } = useIPTracker();

  return (
    <MapView
      style={styles.map}
      mapType="standard"
      region={{
        latitude: lat ?? 0,
        longitude: lng ?? 0,
        latitudeDelta: 0.0992,
        longitudeDelta: 0.0421,
      }}
    >
      {lat && lng ? (
        <Marker
          coordinate={{
            latitude: lat,
            longitude: lng,
          }}
          description={location}
        >
          <SvgXml xml={locationImg} style={styles.marker} />
        </Marker>
      ) : (
        <></>
      )}
    </MapView>
  );
}
