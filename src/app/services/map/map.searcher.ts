import { kakaoStatus } from './map.utility';
import { LocationData } from 'src/app/data/location';
import { SearchType } from './search-item.enum';

declare var kakao;
const geocoder = new kakao.maps.services.Geocoder();
const places = new kakao.maps.services.Places();

export function addressSearch(address: String, callback : (result: addressSearchResult[]) => void){
    geocoder.addressSearch(address, addressSearchCallback.bind(callback))
}

export function keywordSearch(keyword: String, callback : (result: keywordSearchResult[]) => void){
    places.keywordSearch(keyword, keywordSearchCallback.bind(callback));
}

function addressSearchCallback(data, status){
    if(status === kakaoStatus.OK){
        let results : addressSearchResult[] = [];
        data.forEach(element => {
            console.log("el:", element);
            let r : addressSearchResult = {
                type: SearchType.Address,
                location: {
                    lat: element.y,
                    lng: element.x
                },
                address: element.address_name,
                name: element.address_name
            }
            results.push(r);
        });
        this(results);
    }
    else if(status == kakaoStatus.ZERO){
        this(null);
    }
    else if(status == kakaoStatus.ERROR){
        this(null);
    }
}

function keywordSearchCallback(data, status, pagination){
    
    if(status === kakaoStatus.OK){
        let results : keywordSearchResult[] = [];
        data.forEach(element => {
            // console.log("el:", element);
            let r : keywordSearchResult = {
                type: SearchType.Keyword,
                location: {
                    lat: element.y,
                    lng: element.x
                },
                //address에는 name이 없음
                name: element.place_name,
                address: element.address_name
            }
            if(element.road_address_name){
                r.road_address = element.road_address_name;
            }
            results.push(r);
        });
        this(results);
    }
    else if(status == kakaoStatus.ZERO){
        this(null);
    }
    else if(status == kakaoStatus.ERROR){
        this(null);
    }
    // savedCallback = null;
}

export interface keywordSearchResult extends SearchResult {
    location: LocationData;
    name: String;
    road_address?: String;
    address: String;
}

export interface addressSearchResult extends SearchResult {
    location: LocationData;
    address: String;
}

export interface SearchResult {
    type: SearchType;
    location: LocationData;
    name: String;
}