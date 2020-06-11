import { OptionData } from 'src/app/data/option';
import { DataControllerService } from '../../data-controller/data-controller.service';
import { reqOptionList, resOptionList } from '../../data-controller/reqType/listData/optionList.req';
import { reqUrl } from '../../data-controller/reqType/req-url.enum';

export class TabHomeOptionListCtrl {
    optionList : OptionData[];

    constructor(private dataCtrl : DataControllerService){

    }

    getOptionList(foodtruckId: number, menuId: number) : void{
        let options : OptionData[] = [{
          id: 1001,
          name: "기본",
          extraPrice: 0
        },
        {
          id: 1002,
          name: "고오급",
          extraPrice: 500
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