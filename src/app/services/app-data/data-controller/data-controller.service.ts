import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url : string = "";

@Injectable({
  providedIn: 'root'
})
export class DataControllerService {

  constructor(
    private http : HttpClient,
  ) { }

  get httpClient() : HttpClient{
    return this.http;
  }

  dd(){
    /*
      json 방식으로 통신
      
      보낼때
        reqType : 각 데이터에서 지정
        data : 있으면, 여럿이면 객체로 하나로 전송

      받을때
        result : 실패인지 성공인지 (true, false)
        data : 객체형태, 반환은 이것만

    */
    
  }
}
