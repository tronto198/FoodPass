import { DataControllerService } from '../../data-controller/data-controller.service';
import { UserConfigService } from 'src/app/services/user-config/user-config.service';

const reqType = "account";
const StorageID = "id";

export class UserAccountCtrl {
    // myAccountId : number;

    constructor(
        private userConfig : UserConfigService,
        private dataCtrl : DataControllerService,
        ){

    }

    get myAccountId() : number{
        return this.userConfig.myAccountId;
    }

    set myAccountId(id : number){
        this.userConfig.myAccountId = id;
    }

    init() : Promise<void>{
        //저장된 아이디가 있는지 검색
        //없으면 서버에서 받아오기
        //있으면 해당 아이디 사용

        return new Promise((resolve, reject) =>{

            this.findLocalId().then(id => {
                if(id == -1){
                    this.createId(resolve);
                }
                else{
                    this.idSave(resolve, id);
                }
            });
        });
           
    }

    private findLocalId() : Promise<number>{
        
        return new Promise((resolve, reject) =>{
            this.dataCtrl.localStorage.get(StorageID).then(val =>{
                if(val != undefined){
                    console.log('local id');
                    resolve(val);
                }
                else{
                    resolve(-1);
                }
                
            });
        })
    }

    private createId(resolve){
        //서버에서 받아오기
        this.dataCtrl.testRequest(reqType, null, true, {id : 1000}, 300).then((val) =>{
            console.log('create id');
            this.idSave(resolve, val.id);
            resolve();
        })
    }

    private idSave(resolve, id : number){
        this.myAccountId = id;
        this.dataCtrl.localStorage.set(StorageID, id);
        console.log(`my id : ${id}`);
        resolve();
    }
}