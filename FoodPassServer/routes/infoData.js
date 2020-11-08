
//infoData
const express=require('express')
const app=express.Router();
const path = require('path');
const db=new (require('../Database_Connecter'))(path.join(__dirname,'../db_configure.json'));


//function
function sendResult(res, json){
  let result = {
    result : true,
    data: json
  }
  // json.result=true;
  res.send(JSON.stringify(result));
}

function sendError(res, json){
  json.result = false;
  res.send(JSON.stringify(json));
}


//foodtruckID받으면 푸드트럭의 정보 리턴
app.post('/foodtruck',(req,res)=>{
    let data=req.body.data;
    let foodtruck_id=data.foodtruckId;
    console.log("connect ${foodtruck_id}");
  
    const foodtruckSql="select *, st_x(location) as x, st_y(location) as y from foodtruck_tb where foodtruck_id=$1";
    const values=[foodtruck_id];
  
     db.query(foodtruckSql,values).then(res2=>{
   
       const foodtruck = res2.rows[0];
       let data={
           foodtruckData: {
             id: foodtruck.foodtruck_id,
             introduction: foodtruck.introduction,
             location: {
               lng: foodtruck.x,
               lat: foodtruck.y
             },
             name : foodtruck.name,
             notice: foodtruck.notice,
             imgSrc: "https://foodpass.tk/"+foodtruck.image,
            
           }
       }; 
        sendResult(res, data);
      
     })
  
  
     .catch(err=>{
      console.log(err.stack)
      sendError(err, {description: ''});
     });
  });
  
  //foodtruckId, menuId받으면 메뉴 정보 리턴
  app.post('/menu',(req,res)=>{
    let data=req.body.data;
    let foodtruck_id=data.foodtruckId;
    let menu_id=data.menuId;
    console.log("connect ${foodtruck_id}, ${menu_id}");
  
    const menuSql="select * from menu_tb where foodtruck_id=$1 and menu_id=$2";
    const values=[foodtruck_id, menu_id];
  
    db.query(menuSql,values).then(res2=>{
    
      let element = res2.rows[0];
      let data={
        menuData: {
          id: element.menu_id,
          menuName: element.name,
          menuInformation: element.introduction,
          price: element.price,
          imgsrc:"https://foodpass.tk/"+element.image
        }              
      };    
      sendResult(res,data);
   })
   .catch(err=>{
     console.log(err.stack)
     sendError(err, {description: ''});
   });
  });

    //foodtruckId, menuId, optionId받으면 옵션 정보 리턴
    app.post('/option',(req,res)=>{
      let data=req.body.data;
      let foodtruck_id=data.foodtruckId;
      let menu_id=data.menuId;
      let option_id=data.optionId;
      console.log("connect ${foodtruck_id}, ${menu_id} ${option_id}");
    
      const optionSql="select * from option_tb where foodtruck_id=$1 and menu_id=$2 and option_id=$3";
      const values=[foodtruck_id, menu_id, option_id];
    
      db.query(optionSql,values).then(res2=>{
     
        let element = res2.rows[0];
        let data={
          optionData: {
            id: element.option_id,
            name: element.name,
            extraPrice: element.extra_price,
          }              
        };    
        sendResult(res,data);
     })
     .catch(err=>{
       console.log(err.stack)
       sendError(err, {description: ''});
     });
    });

  module.exports=app;