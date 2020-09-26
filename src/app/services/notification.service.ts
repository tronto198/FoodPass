import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { CommunicationService } from './communication/communication.service';
import { reqPushToken, resPushToken } from './communication/reqType/account/pushToken.req';
import { reqUrl } from './communication/reqType/req-url.enum';

//토큰받는과정
@Injectable()
export class NotificationService {
  token: string;

  constructor(
      private afMessaging: AngularFireMessaging,
      private dataCtrl : CommunicationService,
  ){
      this.afMessaging.messaging.subscribe(
          (_messaging) => {
          _messaging.onMessage = _messaging.onMessage.bind(_messaging);
          _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
          }
      );
  }

  get isGranted() {
      return Notification.permission === 'granted';
  }

  init(tokenpipe? : (token) => void, foregroundPipe? : (message) => void){
      this.requestPermission(tokenpipe);
      this.foregroundMessaging(foregroundPipe);
  }

  
  requestPermission(pipe? : (token: string) => void, error? : (error) => void){
      this.afMessaging.requestToken
      .subscribe(
      (token) => {
          console.log('Permission granted! Save to the server!', token);
          this.token = token;
          // alert('permission granted');
          if(pipe){
            pipe(token);
          }
          this.sendTokenToServer();
      },
      (err) => {
          console.error(err);
          // alert('permission denied');
          if(error){
            error(err);
          }
      }
      );
  }

  foregroundMessaging(pipe? : (message : any) => void){
      this.afMessaging.messages.subscribe((msg : foregroundFCM) =>{
          console.log(msg);
          // alert(message);
        //   let data = msg.data;
          if(pipe){
              pipe(msg);
          }
      });

  }

  sendTokenToServer(){
    let req : reqPushToken = {
      token: this.token
    }
    this.dataCtrl.request<resPushToken>(reqUrl.pushToken, req, false)
    .then(v =>{
      console.log('token send');
    })
    .catch(e =>{
      console.log('send token failed', e);
    });
  }
}


interface foregroundFCM {
    from: string;
    priority: string;
    collapse_key: string;
    data: {
        message: string;
        title: string;
    },
    notification: {
        title: string;
        body: string;
    }
}