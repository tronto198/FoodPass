export class CheckValue{
    protected checked: boolean;
    private parent? : CheckboxValue;
    private itemIndex?: number;

    constructor(parent : CheckboxValue, itemIndex: number){
        this.checked = true;
        this.parent = parent;
        this.itemIndex = itemIndex;
    }

    get check(){
        return this.checked;
    }
    set check(b: boolean){
        // console.log(this.parent);
        // console.log(this.itemIndex + "checked");
        if(this.parent != null){
            this.parent.setItemValue(this.itemIndex,b);
        }
        else{
            this.checked = b;
        }
    }

    valueChange(b : boolean){
        this.checked = b;
    }


    toggle(){
        if(this.parent != null){
            this.parent.toggleItem(this.itemIndex);
        }
        else{
            this.check = !this.check;
        }
        
    }
}


export class CheckboxValue extends CheckValue{
    protected indeterminated: boolean;
    protected items: CheckValue[];

    constructor(parent: CheckboxValue = null, itemIndex: number = 0){
        super(parent, itemIndex);
        this.indeterminated = false;
    }

    
    get indeterminate(){
        return this.indeterminated;
    }

    get allCheck(){
        return this.checked;
    }

    set allCheck(b: boolean){
        this.check = b;
        this.checkAll(b);
    }

    checkAll(b : boolean){
        this.indeterminated = false;
        this.items.forEach((value, index, arr)=>{
            value.valueChange(b);
        });
    }

    valueChange(b : boolean){
        this.checked = b;
        this.checkAll(b);
    }

    toggleItem(index: number){
        this.setItemValue(index, !this.items[index].check);
    }

    setItems(items: CheckValue[]){
        this.items = items;
    }

    setItemValue(index: number, b: boolean){
        this.items[index].valueChange(b);
        if(this.items.every((el, index, arr)=>{
            return el.check == b;
        })){
            //모두 체크 or 모두 해제
            this.indeterminated = false;
            if(b){
                this.check = true;
            }
            else{
                this.check = false;
            }
        }
        else{
            //하나 이상 and 다는 아니게 체크됨
            this.check = false;
            this.indeterminated = true;
        }
    }
}

