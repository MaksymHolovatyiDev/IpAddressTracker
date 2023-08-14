import MapView, { Marker } from 'react-native-maps';
import { SvgXml } from 'react-native-svg';

import { locationImg } from '@assets/icons/svg';
import { styles } from './Map.styled';
import { useMain } from 'components/MainProvider/MainProvider';

export default function Map() {
  const {
    MainUserData: { lat, lng, location },
  } = useMain();

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
      <Marker
        coordinate={{
          latitude: lat,
          longitude: lng,
        }}
        description={location}
      >
        <SvgXml xml={locationImg} style={{ height: 35, width: 35 }} />
      </Marker>
    </MapView>
  );
}
