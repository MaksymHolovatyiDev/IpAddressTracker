import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import publicIP from 'react-native-public-ip';

interface ContextValue {
  // type for context value
}

const MainContext = createContext<ContextValue>({} as ContextValue);

export const useMain = () => useContext(MainContext);

const MainProvider = ({ children }: { children: ReactNode }) => {
  const [inputValue, setInputValue] = useState('');
  const [MainUserData, setMainUserData] = useState({
    ip: '',
    location: '',
    timezone: '',
    isp: '',
    lat: 0,
    lng: 0,
  });

  const searchByIp = () => {};

  useEffect(() => {
    let userIp;
    publicIP()
      .then(userIp => {
        setInputValue(userIp);
        if (userIp)
          fetch(
            `https://geo.ipify.org/api/v2/country,city?apiKey=at_womCEDF93LpHVECBVRxUUuKryfceW&ipAddress=${userIp}`
          )
            .then(res => {
              if (!res.ok) throw new Error('Res Error');
              return res.json();
            })
            .then(data => {
              if (data?.code === 422) throw new Error('Bad request');
              setMainUserData({
                ip: data.ip,
                location: `${data.location.country}, ${data.location.city}`,

                timezone: `UTC ${data.location.timezone}`,
                isp: data.isp,
                lat: data.location.lat,
                lng: data.location.lng,
              });
            })
            .catch(console.log);
      })
      .catch(console.log);
  }, []);

  // add states here

  //add useEffect here if you need it

  const value = {
    inputValue,
    setInputValue,
    MainUserData,
    //pass all states and anything else that you will need in components
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MainProvider;
