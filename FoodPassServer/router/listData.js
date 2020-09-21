//ListData
const express=require('express')
const bodyParser=require('body-parser')
const postgres=require('postgresql');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(bodyParser.json({extended: true}))
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


//위치를 받아서 그 위치 xxm 안의 푸드트럭들을 리스트로 리턴 없으면 즐겨찾기?
app.post('/listData/foodtruck',(req,res)=>{
    console.log(req.body);
  
    let data=req.body.data;
    let location_lat=data.location.lat;//위치 형식 다시 고민해보기
    let location_lng=data.location.lng;
    //let name=data.foodtruckList.name;
    //let notice=data.foodtruckList.notice;
    // console.log("connect ${location}");
    console.log(`get foodtruckList location: { lat: ${location_lat}, lng: ${location_lng} }`);
  
    const listSql="select foodtruck_id, st_x(location) as x, st_y(location) as y, name, image, introduction, notice from foodtruck_tb where ST_DistanceSphere(location,ST_MakePoint($2, $1))<=500";
    const values=[location_lat, location_lng];
  
     db.query(listSql,values).then(res2 =>{
      let data = {
          foodtruckList: []
      };
  
      res2.rows.forEach(element => {
        let ftinfo = {
          id: element.foodtruck_id,
          //imgSrc: element.image,
          introduction: element.introduction,
          location:{
            lng:element.x,
            lat:element.y
          },
          name: element.name,
          notice: element.notice,
          //origin_information: element.origin_information
        }
        data.foodtruckList.push(ftinfo);
      });
      sendResult(res, data);
     })
     .catch(err=>{
      console.log(err.stack)
      sendError(err, {description: ''});
     });
    });
    //  ,(err,res)=>{
    //   if(err){
    //     console.log(err.stack)
    //     sendError(err, {description: ''})
    //   }else{
        
    //     let result={
    //       foodtruckList: res.rows
    //     };
    //     sendResult(res, result);
    //   }
  
  //});
  
  //foodtruckID를 받으면 그 푸드트럭의 메뉴 리스트를 리턴
  app.post('/listData/menu',(req,res)=>{
    let data=req.body.data;
    let foodtruck_id=data.foodtruckId;
  
    const menuSql="select menu_id, name, introduction,price,image from menu_tb where foodtruck_id=$1";
    const values=[foodtruck_id];
  
    console.log(`get menuList of foodtruck: ${foodtruck_id}`);
  
     db.query(menuSql,values).then(res2=>{
       let data={
           menuList: []
       };
       res2.rows.forEach(element=>{
         let menuinfo={
           menuID: element.menu_id,
           menuName: element.name,
           menuInformation: element.introduction,
           price: element.price,
           //imgsrc=element.image
  
         }
         data.menuList.push(menuinfo);
       });
       sendResult(res,data);
     
    })
    .catch(err=>{
      console.log(err.stack)
      sendError(err, {description: ''});
    });
  });
  
  //foodtruckID menuID 받으면 옵션들 리턴
  app.post('/listData/option',(req,res)=>{
    let data=req.body.data;
    let foodtruck_id=data.foodtruckId;
    let menu_id=data.menuId;
  
    //당장은 foodtruckid가 같을 필요가 없음
    const optionSql="select option_id,name, extra_price from option_tb where foodtruck_id=$1 and menu_id=$2";
    const values=[foodtruck_id, menu_id];
  
    console.log(`get optionList of foodtruck: ${foodtruck_id}, menu: ${menu_id}`);
  
     db.query(optionSql,values).then(res2=>{
       let data={
         
           optionList:[]
         
       };
       res2.rows.forEach(element=>{
         let optioninfo={
           id: element.option_id,
           name: element.name,
           extraPrice: element.extra_price
         }
          data.optionList.push(optioninfo);
       })
      sendResult(res,data);
    })
    .catch(err=>{
      console.log(err.stack)
      sendError(err,{description: ''});
    });
  });