
//infoData
const express=require('express')
const app=express.Router();
const db=new (require('./Database_Connecter'))('db_configure.json');

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
       //여기엔 메뉴리스트 붙일 예정
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
             notice: foodtruck.notice
           }
       };
      
      //  res2.rows.forEach(element => {
      //   let ftinfo = {
      //     id: element.foodtruck_id,
      //     //imgSrc: element.image,
      //     introduction: element.introduction,
      //     location:{
      //       lng:element.x,
      //       lat:element.y
      //     },
      //     name: element.name,
      //     notice: element.notice,
      //     //origin_information: element.origin_information
      //   }
        // result.data.foodtruckList.push(ftinfo);
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
  
    const optionSql="select * from menu_tb where foodtruck_id=$1 and menu_id=$2";
    const values=[foodtruck_id, menu_id];
  
    db.query(menuSql,values).then(res2=>{
      //여기에 옵션리스트도 곧 붙일 예정
      let element = res2.rows[0];
      let data={
        menuData: {
          menuId: element.menu_id,
          menuName: element.name,
          menuInformation: element.introduction,
          price: element.price,
        }
        
        
      };
      // res2.rows.forEach(element=>{
      //   let menuinfo={
      //     menuId=element.menu_id,
      //     menuName=element.name,
      //     menuInformation=element.introduction,
      //     price=element.price,
      //     //imgsrc=element.image
  
      //   }
      //   result.data.menuList.push(menuinfo);
      // });
      sendResult(res,data);
    
   })
   .catch(err=>{
     console.log(err.stack)
     sendError(err, {description: ''});
   });
  });
  module.exports=app;