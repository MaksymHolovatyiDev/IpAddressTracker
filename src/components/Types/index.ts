export interface ResSuccess {
  ip: string;
  location: {
    country: string;
    city: string;
    lat: number;
    lng: number;
    timezone: string;
  };
  isp: string;
}

export interface ResError {
  code: number;
}
