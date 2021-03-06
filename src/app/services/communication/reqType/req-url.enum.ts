
export enum reqUrl {
    newAccount = "/account/create",
    pushToken = "/account/pushToken",
    orderHistory = "/account/orderHistory",
    giveRating = "/account/giveRating",

    foodtruckList = "/listData/foodtruck",
    menuList = "/listData/menu",
    optionList = "/listData/option",

    foodtruckData = "/infoData/foodtruck",
    menuData = "/infoData/menu",
    optionData = "/infoData/option",

    order = "/order/create",
    orderConfirm = "/order/confirm",
    orderCall = "/order/ready",
    orderReceived = "/order/finish",
    orderWating="/order/waiting",
   
    
    newFoodtruck = "/foodtruck/create",
    modifyFoodtruckInfo = "/foodtruck/modify",
    deleteFoodtruck = "/foodtruck/delete",
    openFoodtruck = "/foodtruck/open",
    closeFoodtruck = "/foodtruck/close",

    newMenu = "/foodtruck/menu/create",
    modifyMenuInfo = "/foodtruck/menu/modify",
    deleteMenu = "/foodtruck/menu/delete",

    newOption = "/foodtruck/option/create",
    modifyOptionInfo = "/foodtruck/option/modify",
    deleteOption = "/foodtruck/option/delete",

   
};

