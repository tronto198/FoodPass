import { Injectable } from '@angular/core';
import { LocationData } from 'src/app/data/location';

@Injectable()
export class LocationDataCtrl{
    myLocation: LocationData;
    searchLocation: LocationData;

}