import { ImageBackground, Text } from 'react-native';

import Input from 'components/Input/Input';
import MainData from 'components/MainData/MainData';
// import Map from 'components/Map/Map';
import { styles } from 'Screens/MainScreen.styled';

export default function MainPage() {
  return (
    <ImageBackground
      style={styles.bg}
      source={require('@assets/pattern-bg-mobile.png')}
    >
      <Text style={styles.mainText}>IP Address Tracker</Text>
      <Input />
      <MainData />
      {/* <Map /> */}
    </ImageBackground>
  );
}
