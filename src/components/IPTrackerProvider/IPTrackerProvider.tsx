import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import publicIP from 'react-native-public-ip';

import { fetchByIp } from 'helpers/fetchByIp';
import { ContextValue } from 'components/Types';
import { styles } from './IPTrackerProvider.styled';
import { ActivityIndicator, View } from 'react-native';

const IPTrackerContext = createContext<ContextValue>({} as ContextValue);

export const useIPTracker = () => useContext(IPTrackerContext);

const IPTrackerProvider = ({ children }: { children: ReactNode }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [MainUserData, setMainUserData] = useState({
    ip: '',
    location: '',
    timezone: '',
    isp: '',
    lat: 0,
    lng: 0,
  });

  const searchByIp = (ip: string) => {
    fetchByIp(setMainUserData, setLoaded, setError, ip);
  };

  useEffect(() => {
    publicIP()
      .then(userIp => {
        setInputValue(userIp);
        searchByIp(userIp);
      })
      .catch(console.log);
  }, []);

  const value = {
    inputValue,
    setInputValue,
    MainUserData,
    searchByIp,
    error,
  };

  return (
    <IPTrackerContext.Provider value={value}>
      {loaded ? (
        children
      ) : (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </IPTrackerContext.Provider>
  );
};

export default IPTrackerProvider;
