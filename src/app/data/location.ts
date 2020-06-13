export interface LocationData {
    lat: number,
    lng: number,
    name? : string
    //location: st_setsrid(ST_MakePoint(lat, lng), 4326);
}