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

//데이터 입력
app.post('/create',(req,res)=>{
    let data=req.body.data;
    let name=data.name;
    let image=data.imgSrc;
    let introduction=data.introduction;
    let notice=data.notice;
    //let origin_information=data.origin_information;
    let location_lat=data.location.lat;//형태고민
    let location_lng=data.location.lng;
    
  
  
    const truckInformSql="insert into foodtruck_tb(name, image, introduction, notice, location) values($1, $2, $3, $4, st_setsrid(ST_MakePoint($6, $5), 4326)) Returning *";
    const values=[name,image,introduction,notice,location_lat, location_lng];
    db.query(truckInformSql,values).then(res2=>{
  
  
     sendResult(res, result);
    })
   .catch(err=>{
  console.log(err.stack)
  sendError(err, {description: ''})
   })   
  });
  
app.post('/modify', (req, res)=>{
  let data=req.body.data;
  let name=data.name;
  let image=data.imgSrc;
  let introduction=data.introduction;
  let notice=data.notice;
  //let origin_information=data.origin_information;
  let location_lat=data.location.lat;//형태고민
  let location_lng=data.location.lng;
  let foodtruck_id=data.foodtruck_id;


  const Sql="update foodtruck_tb set name=$1, image=$2, introduction=$3, notice=$4, location=st_setsrid(ST_MakePoint($6, $5), 4326) where foodtruck_id= $7 Returning *";
  const values=[name,image,introduction,notice,location_lat, location_lng, foodtruck_id];
  db.query(Sql,values).then(res2=>{


   sendResult(res, result);
  })
 .catch(err=>{
console.log(err.stack)
sendError(err, {description: ''})
 }) 
})

  
app.post('/delete', (req, res)=>{
  let data=req.body.data;
  let foodtruck_id=data.foodtruck_id;


  const Sql="delete from foodtruck_tb where foodtruck_id=$1 Returning foodtruck_id";
  const values=[foodtruck_id];
  db.query(Sql,values).then(res2=>{
   sendResult(res, result);
  })
 .catch(err=>{
console.log(err.stack)
sendError(err, {description: ''})
 }) 
})



  app.post('/menu/create',(req,res)=>{
    let data=req.body.data;
    let foodtruck_id=data.id;
    let name=data.menuName;
    let image=data.imgsrc;
    let introduction=data.menuInformation;
    let price=data.price;
   // let allergy_information=data.allergy_information;
  
    const menuInformSql="insert into menu_tb(foodtruck_id, name,image ,introduction ,price ) values($1,$2,$3,$4,$5) Returning *";
    const values=[foodtruck_id,name,image,introduction,price];
  
     db.query(menuInformSql,values).then(res2=>{
      sendResult(res,result);
    })
    .catch(err=>{
      console.log(err.stack)
      sendError(err, {description: ''})
    })
   
  });
  app.post('/menu/modify',(req,res)=>{
    let data=req.body.data;
    let foodtruck_id=data.id;
    let name=data.menuName;
    let image=data.imgsrc;
    let introduction=data.menuInformation;
    let price=data.price;
   // let allergy_information=data.allergy_information;
    let menu_Id=data.menuID;

    const menuInformSql="update menu_tb set foodtruck_id=$1, name=$2,image=$3 ,introduction=$4 ,price=$5 where menu_id=$6 Returning *";
    const values=[foodtruck_id,name,image,introduction,price, menu_Id];
  
     db.query(menuInformSql,values).then(res2=>{
      sendResult(res,result);
    })
    .catch(err=>{
      console.log(err.stack)
      sendError(err, {description: ''})
    })
   
  });
  app.post('/menu/delete',(req,res)=>{
    let data=req.body.data;
    let menu_Id=data.menuID;
  
    const menuInformSql="delete from menu_tb where menu_id=$1  Returning menu_id";
    const values=[menu_Id];
  
     db.query(menuInformSql,values).then(res2=>{
      sendResult(res,result);
    })
    .catch(err=>{
      console.log(err.stack)
      sendError(err, {description: ''})
    })
   
  });
  
  
  app.post('/option/create',(req,res)=>{
    let data=req.body.data;
    let menu_id=data.menuID;
    let name=data.name;
    let extra_price=data.extraPrice;
  
    const optionInformSql="insert into option_tb(menu_id,name,price) values($1,$2,$3) Returning *";
    const values=[menu_id,name,extra_price];
  
     db.query(optionInformSql,values).then(res2=>{
      sendResult(res,result);
    })
    .catch(err=>{
      console.log(err.stack)
      sendError(err, {description: ''})
    })
  
  });
  app.post('/option/modify',(req,res)=>{
    let data=req.body.data;
    let menu_id=data.menuID;
    let name=data.name;
    let extra_price=data.extraPrice;
    let option_id=data.option_id;
    const optionInformSql="update option_tb set menu_id=$1,name=$2,price=$3 where opion_id=$4 Returning *";
    const values=[menu_id,name,extra_price, option_id];
  
     db.query(optionInformSql,values).then(res2=>{
      sendResult(res,result);
    })
    .catch(err=>{
      console.log(err.stack)
      sendError(err, {description: ''})
    })
  
  });
  app.post('/option/delete',(req,res)=>{
    let data=req.body.data;
    let option_id=data.option_id;
  
    const optionInformSql="delete from option_tb where option_id=$1 Returning option_id";
    const values=[option_id];
  
     db.query(optionInformSql,values).then(res2=>{
      sendResult(res,result);
    })
    .catch(err=>{
      console.log(err.stack)
      sendError(err, {description: ''})
    })
  
  });
  module.exports=app;