import { OptionData } from 'src/app/data/option';
import { DataControllerService } from '../../data-controller/data-controller.service';
import { reqOptionList, resOptionList } from '../../data-controller/reqType/optionList.req';
import { reqType } from '../../data-controller/reqType/req-type.enum';

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

        this.dataCtrl.testRequest<resOptionList>(reqType.optionList, req, true, res, 150, false)
        .then(data =>{
          this.optionList = data.optionList;
          console.log('get optionList');
        })
    }
}