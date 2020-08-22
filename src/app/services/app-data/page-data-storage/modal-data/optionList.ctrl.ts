import { OptionData } from 'src/app/data/option';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { reqOptionList, resOptionList } from 'src/app/services/communication/reqType/listData/optionList.req';
import { reqUrl } from 'src/app/services/communication/reqType/req-url.enum';

export class ModalOptionListCtrl {
    optionList : OptionData[];

    constructor(private dataCtrl : CommunicationService){

    }

    getOptionList(foodtruckId: number, menuId: number) : void{
        let options : OptionData[] = [{
          id: 1001,
          name: "기본",
          extraPrice: 0
        },
        {
          id: 1002,
          name: "고오오오오오오오오오오오오오오급",
          extraPrice: 50000
        }
      ];
    
        // return options;
        let req : reqOptionList = {
          foodtruckId: foodtruckId,
          menuId: menuId
        };

        let res : resOptionList = {
          optionList: options
        };

        this.dataCtrl.request<resOptionList>(reqUrl.optionList, req, true)
        .then(data =>{
          this.optionList = data.optionList;
          console.log('get optionList');
        })
    }
}