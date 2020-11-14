import { FoodtruckData } from 'src/app/data/foodtruck'
import { MenuData } from 'src/app/data/menu'
import { OptionData } from 'src/app/data/option'

const defaultFoodtruckData : FoodtruckData = {
    id: -1,
    name: "default foodtruck",
    introduction: "로딩중..",
    notice: "로딩중입니다.."
}

const defaultMenuData : MenuData = {
    id: -1,
    menuName: "default menu",
    price: 0
}

const defaultOptionData : OptionData = {
    id: -1,
    name: "default option",
    extraPrice: 0
}


export const DefaultValue = {
    foodtruckImgSrc: "../assets/icon/foodtruck.png",
    MenuImgSrc: "../assets/icon/donut.png",
    mapImgSrc : "../assets/icon/foodtruck.png",
    foodtruckData: defaultFoodtruckData,
    menuData: defaultMenuData,
    optionData: defaultOptionData,
}
