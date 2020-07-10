import { LocationData } from 'src/app/data/location';

declare var kakao;

export function LocationDataToPoint(location: LocationData) : any {
    return new kakao.maps.LatLng(location.lat, location.lng);
}

export function PointToLocationData(coords: LatLng) : LocationData {
    let location : LocationData = {
        lat: coords.getLat(),
        lng: coords.getLng()
    };
    return location;
}

interface LatLng {
    getLat() : number;
    getLng() : number;
}

export const kakaoStatus = {
    OK: kakao.maps.services.Status.OK,
    ZERO: kakao.maps.services.Status.ZERO_RESULT,
    ERROR: kakao.maps.services.Status.ERROR
};