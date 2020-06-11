//기본 라우팅 소스코드
//1.express모듈 사용하기 위해 require 함수로 불러옴
//bodyparser.json 추가?
const express=require('express');
const bodyParser=require('body-parser');
const postgres=require('postgresql');
const cors=require('cors');

//2.라우팅 객체 만듦.
const app=express();

//const {Client}=require('pg');
//app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.use(bodyParser.json({extended: true}))

//db_configure.json 써먹기
const db=new (require('./Database_Connecter'))('db_configure.json');

//function
function sendResult(res, json){
  json.result=true;
  res.send(JSON.stringify(json));
}

function sendError(res, json){
  json.result = false;
  res.send(JSON.stringify(json));
}

//cors
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});



//데이터 입력
app.post('/insertTruck',(req,res)=>{
  let data=req.body.data;
  let name=data.name;
  //let image=data.imgSrc;
  let introduction=data.introduction;
  let notice=data.notice;
  //let origin_information=data.origin_information;
  let location_lat=data.location.lat;//형태고민
  let location_lng=data.location.lng;
  


  const truckInformSql="insert into foodtruck_tb(name, image, introduction, notice, origin_information, location) values($1, $2, $3, $4, $5, st_setsrid(ST_MakePoint($7, $6), 4326)) Returning *";
  const values=[name,image,introduction,notice,origin_information,location_lat, location_lng];
  db.query(truckInformSql,values).then(res2=>{


   sendResult(res, result);
  })
 .catch(err=>{
console.log(err.stack)
sendError(err, {description: ''})
 })   
});

app.post('/insertMenu',(req,res)=>{
  let data=req.body.data;
  let foodtruck_id=data.id;
  let name=data.menuName;
  let image=data.imgSrc;
  let introduction=data.menu_information;
  let price=data.price;
 // let allergy_information=data.allergy_information;

  const menuInformSql="insert into menu_tb(foodtruck_id, name,image ,introduction ,price ,allergy_information) values($1,$2,$3,$4,$5,$6) Returning *";
  const values=[foodtruck_id,name,image,introduction,price,allergy_information];

   db.query(menuInformSql,values).then(res2=>{
    sendResult(res,result);
  })
  .catch(err=>{
    console.log(err.stack)
    sendError(err, {description: ''})
  })
 
});


app.post('/insertOption',(req,res)=>{
  let data=req.body.data;
  let menu_id=data.menuId;
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


//account
//user만들고 아이디 리턴
app.post('/account/create',(req,res)=>{
  

  const Sql="insert into user_tb values(default) Returning user_id";
 
   db.query(Sql).then(res2 =>{
    let result={
      data:{
        accountId: 4001
      }
    
    };
    res2.rows.forEach(element => {
      let userinfo = {
        id: element.user_id
      }
      result.foodtruckList.push(userinfo);
    });

    sendResult(res, result);
   })
   .catch(err=>{
    console.log(err.stack)
    sendError(err, {description: ''});
   });
  
});

//pushToken
app.post('/account/pushToken',(req,res)=>{
  let data=req.body.data;
  let push_token=data.token;

  const Sql="insert into user_tb(push_token) values($1) returning push_token";
  const values=[push_token];

   db.query(Sql,values).then(res2=>{
    res2.rows.forEach(element=>{
      let tokeninfo={
        token: element.push_token
      }
      result.data.push(tokeninfo);
    });
  
  sendResult(res, result);
  //res.send('pushToken: '+ push_token)
})
.catch(err=>{
  console.log(err.stack)
  sendError(err, {description: ''});
});
});

//ordertable에서 userID가 같은 주문들을 시간순으로 리턴
app.post('/account/orderHistory',(req,res)=>{
  let data=req.body.data;
  let user_id=data.userId;
  
  console.log("connect ${user_id}");

  const orderSql="select order_tb.user_order_menu_id, menu_id, option_id, count from order_tb natural join user_order_menu_tb where user_id=$1  order by order_date_time";
  const values=[user_id];

   db.query(orderSql,values).then(res2=>{
     let result={
       data:{
         orderList:[]
       }
     };
     res2.rows.forEach(element=>{
       let orderinfo={
         id: element.user_order_menu_id,
        // foodtruckinfo: {
        //   id:
        //   name:
        //   introduction:
        //   location:{
        //     lng:
        //     lat:
        //   }
        // },
        // orderedMenu:{
        //   menuinfo:
        //   optioninfo:
        //   amount:element.
        // }
        //orderNo,
        //waiting: element.
       }
       result.data.orderList.push(orderinfo);
     });
     sendResult(res,result);
   
  })
  .catch(err=>{
    console.log(err.stack)
    sendError(err, {description:''});
  });
});

//ListData
//위치를 받아서 그 위치 xxm 안의 푸드트럭들을 리스트로 리턴 없으면 즐겨찾기?
app.post('/listData/foodtruck',(req,res)=>{
  console.log(req.body);

  let data=req.body.data;
  let location_lat=data.location.lat;//위치 형식 다시 고민해보기
  let location_lng=data.location.lng;
  //let name=data.foodtruckList.name;
  //let notice=data.foodtruckList.notice;
  console.log("connect ${location}");

  const listSql="select foodtruck_id, st_x(location) as x, st_y(location) as y, name, image, introduction, notice from foodtruck_tb where ST_DistanceSphere(location,ST_MakePoint($2, $1))<=500";
  const values=[location_lat, location_lng];

   db.query(listSql,values).then(res2 =>{
    let result={
      data: {
        foodtruckList: []
      }
     
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
      result.data.foodtruckList.push(ftinfo);
    });
    sendResult(res, result);
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
  let foodtruck_id=data.id;
  console.log("connect ${foodtruck_id}");

  const menuSql="select * from menu_tb where foodtruck_id=$1";
  const values=[foodtruck_id];

   db.query(menuSql,values).then(res2=>{
     let result={
       data:{
         menuList: []
       }
     };
     res2.rows.forEach(element=>{
       let menuinfo={
         menuID=element.menu_id,
         menuName=element.name,
         menuInformation=element.introduction,
         price=element.price,
         //imgsrc=element.image

       }
       result.data.menuList.push(menuinfo);
     });
     sendResult(res,result);
   
  })
  .catch(err=>{
    console.log(err.stack)
    sendError(err, {description: ''});
  });
});

//foodtruckID menuID 받으면 옵션들 리턴
app.post('/listData/option',(req,res)=>{
  let data=req.body.data;
  let foodtruck_id=data.id;
  let menu_id=data.menuId;
  console.log("connect ${foodtruck_id}, ${menu_id}");

  const optionSql="select * from option_tb where foodtruck_id=$1 and menu_id=$2";
  const values=[foodtruck_id, menu_id];

   db.query(optionSql,values).then(err2=>{
     let result={
       data:{
         optionList:[]
       }
     };
     res2.rows.forEach(element=>{
       let optioninfo={
         id: element.option_id,
         name: element.name,
         extraPrice: element.extra_price
       }
       result.data.optionList.push(optioninfo);
     })
  sendResult(res,result);
  })
  .catch(err=>{
    console.log(err.stack)
    sendError(err,{description: ''});
  });
});

//infoData
//foodtruckID받으면 푸드트럭의 정보 리턴
app.post('/infoData/foodtruck',(req,res)=>{
  let data=req.body.data;
  let foodtruck_id=data.id;
  console.log("connect ${foodtruck_id}");

  const foodtruckSql="select * from foodtruck_tb where foodtruck_id=$1";
  const values=[foodtruck_id];

   db.query(foodtruckSql,values).then(res2=>{
     let result={
       data:{
         foodtruckList: []
       }
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
      result.data.foodtruckList.push(ftinfo);
    });
    sendResult(res, result);
   })


   .catch(err=>{
    console.log(err.stack)
    sendError(err, {description: ''});
   });
});

//foodtruckID, menuID받으면 메뉴 정보 리턴
app.post('/infoData/menu',(req,res)=>{
  let data=req.body.data;
  let foodtruck_id=data.id;
  let menu_id=data.menuId;
  console.log("connect ${foodtruck_id}, ${menu_id}");

  const optionSql="select * from menu_tb where foodtruck_id=$1 and menu_id=$2";
  const values=[foodtruck_id, menu_id];

  db.query(menuSql,values).then(res2=>{
    let result={
      data:{
        menuList: []
      }
    };
    res2.rows.forEach(element=>{
      let menuinfo={
        menuID=element.menu_id,
        menuName=element.name,
        menuInformation=element.introduction,
        price=element.price,
        //imgsrc=element.image

      }
      result.data.menuList.push(menuinfo);
    });
    sendResult(res,result);
  
 })
 .catch(err=>{
   console.log(err.stack)
   sendError(err, {description: ''});
 });
});

//order
//orderList받으면 그 오더들을 각 푸드트럭에 전달한 뒤, 각 푸드트럭이 응답하면 
//신호 모으고 orderID를 부여한 뒤 리턴
app.post('/order/request',(req,res)=>{
  let data=req.body.data;
  let foodtruck_id=data.id;
  
  console.log("connect ${foodtruck_id}");

  const Sql="select user_order_menu_id as isvalid from user_order_menu_tb where foodtruck_id=$1";
  const values=[foodtruck_id];

   db.query(Sql,values,(err,res)=>{
    if(res.rows[0].isvalid){
      const orderSql="select * from order_tb where user_order_menu_id= $1 "
      const values=[foodtruck_id];
      db.query(orderSql, values).then(res3={

      })
    }
  })
});



//수령확인한 orderID를 받아 푸드트럭에 전달하고 응답을 받으면 리턴

/*
//주문했을때
app.post('/insertOrder',(req,res)=>{
   let data=req.body.data;
  let user_id=req.body.user_id;
  let foodtruck_id=req.body.foodtruck_id;
  let menu_id=req.body.menu_id;
  let option_id=req.body.option_id;
  let menu_num=req.body.menu_num;
  let option_num=req.body.option_num;
  let order_date_time=req.body.order_date_time;
  let price=req.body.price;
  let is_paid=req.body.is_paid;
  let other_request=req.body.other_request;
  let order_number=req.body.order_number;

  const orderSql="insert into user_order_menu_tb(user_id,foodtruck_id,menu_id,option_id,menu_num,option_num,order_date_time,price,is_paid,other_request,order_number) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11);
  const values=[user_id,foodtruck_id,menu_id,option_id,menu_num,option_num,order_date_time,price,is_paid,other_request,order_number];

   db.query(orderSql,values,(err,res)=>{
     if()
    if(err){
      console.log(err.stack)
    }else{
      console.log(res.rows[0])
      res.send('order_number: '+order_number)
    }
  })
});
*/
//3. 기본 라우팅 라우터 모듈
//req: 클라이언트로부터 넘어온 데이터가 저장된 객체
//res: 클라이언트에로 결과를 넘겨주기 위한 객체

app.get('/', function(req, res){
  res.send("Hello, world!")
});
/*
//query: get 방식으로 서버에 데이터 전송할 때, 주소 뒤에 붙는 데이터 
app.get('/pass', function(req,res){
  var data=req.query.data
  res.send(data)
});
*/

//4. 서버 열기
app.listen(8080, function(){
  console.log("server starting with 8080")
});


