import { useCallback } from 'react';
import { ImageBackground, Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Input from 'components/Input/Input';
import MainData from 'components/MainData/MainData';
import Map from 'components/Map/Map';
import { styles } from 'Screens/MainScreen.styled';
import MainProvider from 'components/IPTrackerProvider/IPTrackerProvider';

export default function MainPage() {
  const [fontsLoaded, fontError] = useFonts({
    'Rubik-Bold': require('@assets/fonts/Rubik-Bold.ttf'),
    'Rubik-Medium': require('@assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Regular': require('@assets/fonts/Rubik-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <MainProvider>
      <ImageBackground
        style={styles.bg}
        source={require('@assets/pattern-bg-mobile.png')}
        onLayout={onLayoutRootView}
      >
        <Text style={styles.mainText}>IP Address Tracker</Text>
        <Input />
        <MainData />
      </ImageBackground>
      <Map />
    </MainProvider>
  );
}
