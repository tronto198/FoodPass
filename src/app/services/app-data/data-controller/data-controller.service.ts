import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpResponse, httpError, req } from './http-communication.interface';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { UserConfigService } from '../../user-config/user-config.service';

const url : string = "";

@Injectable()
export class DataControllerService {

  private loading;
  constructor(
    public httpClient : HttpClient,
    public localStorage : Storage,
    private loadingCtrl : LoadingController,
    private userConfig : UserConfigService,
  ) { }

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

  request<T extends object>(reqType : string, data : object) : Promise<T>{
    let request : req = {
      userId : this.userConfig.myAccountId,
      reqType : reqType,
      data : data
    };

    return new Promise((resolve, reject) =>{
      this.httpClient.post(url, request).subscribe(data =>{
        this.connectSuccess(resolve, reject, data as httpResponse);
      },
      err =>{
        console.log(err);
        this.connectFailure(reject);
      });
    });
    
  }

  private connectSuccess(resolve, reject, res : httpResponse){
    if(res.result){
      resolve(res.data);
    }
    else{
      let error : httpError = {
        reason : res.reason ? res.reason : "문제가 발생했습니다.",
        data : res.data
      };
      reject(error);
    }
    this.loading.dismiss();
  }

  private connectFailure(reject){
    let error : httpError = {
      reason : "통신에 실패했습니다."
    };
    reject(error);
    this.loading.dismiss();
  }

  async testRequest<T extends object>(reqType: string, data : object, success : boolean, expectedData : T, receiveInterval : number) : Promise<T>{
    this.loading = await this.loadingCtrl.create({
      message: '요청 중입니다...',
    });
    this.loading.present();

    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
        let res : httpResponse = {
          result : success,
          data : expectedData,
          reason : "테스트중"
        };
        this.connectSuccess(resolve, reject, res);
      }, receiveInterval);
    });

  }
}
