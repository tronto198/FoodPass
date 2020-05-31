import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
    token: string;

    constructor(
        private afMessaging: AngularFireMessaging
    ){
        this.afMessaging.messaging.subscribe(
            (_messaging) => {
            _messaging.onMessage = _messaging.onMessage.bind(_messaging);
            _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
            }
        );
    }

    
  requestPermission(pipe? : (token: string) => void, error? : (error) => void){
    this.afMessaging.requestToken
    .subscribe(
      (token) => {
        console.log('Permission granted! Save to the server!', token);
        this.token = token;
        // alert('permission granted');
        pipe(token);
      },
      (err) => {
        console.error(err);
        // alert('permission denied');
        error(err);
      }
    );
  }

  foregroundMessaging(pipe? : (message : any) => void){
      this.afMessaging.messages.subscribe(message =>{
          console.log(message);
          // alert(message);
          pipe(message);
      });

  }
}
