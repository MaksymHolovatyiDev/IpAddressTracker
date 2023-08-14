export interface MainDataType {
  ip: string;
  location: string;
  timezone: string;
  isp: string;
  lat: number;
  lng: number;
}

export interface ContextValue {
  inputValue: string;
  setInputValue: (ip: string) => void;
  MainUserData: MainDataType;
  searchByIp: (ip: string) => void;
  error: boolean;
}
