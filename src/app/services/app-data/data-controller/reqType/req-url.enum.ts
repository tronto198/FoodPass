
export enum reqUrl {
    newAccount = "/account/create",
    pushToken = "/account/pushToken",
    orderHistory = "/account/history",
    giveRating = "/account/giveRating",

    foodtruckList = "/listData/foodtruck",
    menuList = "/listData/menu",
    optionList = "/listData/option",

    foodtruckData = "/infoData/foodtruck",
    menuData = "/infoData/menu",

    order = "/order/request",
    orderReceived = "/order/received",

    
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

    orderConfirm = "/foodtruck/order/confirm",
    orderCall = "/foodtruck/order/call",
};

