import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { httpResponse, httpError, httpRequest } from './http-communication.interface';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { SharedDataService } from '../../shared-data/shared-data.service';
import { reqUrl } from './reqType/req-url.enum';
import { environment } from 'src/environments/environment';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
    //나중에 보안토큰 추가
  })
};


@Injectable()
export class DataControllerService {

  private loading;
  constructor(
    public httpClient : HttpClient,
    public localStorage : Storage,  //빼자
    public sharedData : SharedDataService,
    private loadingCtrl : LoadingController,
    
  ) { 
    //cors
    httpOption.headers.set('Access-Control-Allow-Origin', '*');
  }

  request<T extends object>(reqUrl : reqUrl, data : object,
    loadingScreen : boolean = true, loadingMessage? : string) : Promise<T>{
    
      if(loadingScreen){
        this.presentLoadingScreen(loadingMessage);
      }

      const request : httpRequest = {
        userId : this.sharedData.account.myAccountId,
        data : data
      };

      const url = environment.host.concat(reqUrl);

      return new Promise((resolve, reject) =>{
        this.httpClient.post(environment.host, request, httpOption).subscribe(data =>{
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
        reason : res.reason != null ? res.reason : "문제가 발생했습니다.",
        data : res.data
      };
      reject(error);
    }
    this.dismissLoadingScreen();
  }

  private connectFailure(reject){
    let error : httpError = {
      reason : "통신에 실패했습니다. 연결 실패" //서버가 없거나, 인터넷이 없거나
    };
    reject(error);
    this.dismissLoadingScreen();
  }

  async testRequest<T extends object>(reqUrl: string, data : object,
    success : boolean, expectedData : T, receiveInterval : number,
    loadingScreen : boolean = true, loadingMessage? : string) : Promise<T>{
    
      if(loadingScreen){
        this.presentLoadingScreen(loadingMessage);
      }
      
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
  
  private async presentLoadingScreen(message? : string){
    if(this.loading != null){
      this.loading = await this.loadingCtrl.create({
        message: message != null ? message : '요청 중입니다...',
      });
      this.loading.present();
    }
  }

  private dismissLoadingScreen(){
    if(this.loading != null){
      this.loading.dismiss();
      this.loading = null;
    }
  }
}
