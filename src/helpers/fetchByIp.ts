import { MainDataType } from 'components/Types';

export const fetchByIp = (
  setMainUserData: (data: MainDataType) => void,
  setLoaded: (data: boolean) => void,
  setError: (error: boolean) => void,
  userIp: string
) => {
  setError(false);
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
      .catch(e => {
        setError(true);
        console.log(e);
      })
      .finally(() => {
        setLoaded(true);
      });
};
