export class CheckboxValue<T extends CheckValue> implements CheckValue{
    private allChecked: boolean;
    private indeterminated: boolean;
    private items: T[];
    constructor(){
        this.allChecked = true;
        this.indeterminated = false;
    }

    get checked(){
        return this.allCheck;
    }
    set checked(b: boolean){
        this.allCheck = b;
    }

    get allCheck(){
        return this.allChecked;
    }
    set allCheck(b: boolean){
        this.allChecked = b;
        this.indeterminated = false;
        this.items.forEach((value, index, arr)=>{
            value.checked = true;
        });
    }

    toggle(){
        this.allCheck = !this.allCheck;
    }

    get indeterminate(){
        return this.indeterminated;
    }

    setItems(items: T[]){
        this.items = items;
    }

    setItemValue(index: number, checked: boolean){
        this.items[index].checked = checked;
        if(this.items.every((el, index, arr)=>{
            return el.checked == checked;
        })){
            //모두 체크 or 모두 해제
            if(checked){
                this.allCheck = true;
            }
            else{
                this.indeterminated = false;
            }
        }
        else{
            //하나 이상 and 다는 아니게 체크됨
            this.allCheck = false;
            this.indeterminated = true;
        }
    }
}

export interface CheckValue{
    checked: boolean;
}
