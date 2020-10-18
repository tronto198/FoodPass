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

export function distance(location1: LocationData, location2: LocationData){
    var line = new kakao.maps.Polyline({
        path : [LocationDataToPoint(location1), LocationDataToPoint(location2)]
    })

    let dis = Math.round(line.getLength());
    console.log(`distance: ${dis}, line: ${line}, line.getLength: ${line.getLength()}, `, location1, location2)
    return dis;
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