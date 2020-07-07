import { LocationData } from 'src/app/data/location';

declare var kakao;

export function locationDataToPoint(location: LocationData) : any{
    return new kakao.maps.LatLng(location.lat, location.lng);
}
