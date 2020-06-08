//기본 라우팅 소스코드
//1.express모듈 사용하기 위해 require 함수로 불러옴
//bodyparser.json 추가?
const express=require('express');
const bodyParser=require('body-parser');
const postgres=require('postgresql');

//2.라우팅 객체 만듦.
const app=express();

//const {Client}=require('pg');
app.use(bodyParser.urlencoded({extended: true}))


//db_configure.json 써먹기
const db=new (require('./Database_Connecter'))('db_configure.json');

//function
function sendResult(res, json){
  json.result=true;
  res.send(JSON.stringify(json));
}

//데이터 입력
app.post('/insertTruck',(req,res)=>{
  let name=req.body.name;
  let image=req.body.image;
  let introduction=req.body.introduction;
  let notice=req.body.notice;
  let origin_information=req.body.origin_information;
  let location=req.body.location;

  const truckInformSql="insert into foodtruck_tb(name, image, introduction, notice, origin_information, location) values($1, $2, $3, $4, $5, $6) Returning *";
  const values=[name,image,introduction,notice,origin_information,location];
  db.query(truckInformSql,values,(err,res)=>{
    if(err){
      console.log(err.stack)
    }else{
      console.log(res.rows[0])
     // res.send('name: '+name)
    }
  })

});

app.post('/insertMenu',(req,res)=>{
  let foodtruck_id=req.body.foodtruck_id;
  let name=req.body.name;
  let image=req.body.image;
  let introduction=req.body.introduction;
  let price=req.body.price;
  let allergy_information=req.body.allergy_information;

  const menuInformSql="insert into menu_tb(foodtruck_id, name,image ,introduction ,price ,allergy_information) values($1,$2,$3,$4,$5,$6)";
  const values=[foodtruck_id,name,image,introduction,price,allergy_information];

   db.query(menuInformSql,values,(err,res)=>{
    if(err){
      console.log(err.stack)
    }else{
      console.log(res.rows[0])
     // res.send('name: '+name)
    }
  })
});


app.post('/insertOption',(req,res)=>{
  let menu_id=req.body.menu_id;
  let name=req.body.name;
  let extra_price=req.body.extra_price;

  const optionInformSql="insert into option_tb(menu_id,name,price) values($1,$2,$3)";
  const values=[menu_id,name,extra_price];

   db.query(optionInformSql,values,(err,res)=>{
    if(err){
      console.log(err.stack)
    }else{
      console.log(res.rows[0])
     // res.send('menuId: '+menu_id)
    }
  })
});


//account
//user만들고 아이디 리턴

app.post('/account/create',(req,res)=>{
  let push_tocken=req.body.push_tocken;

  const userInformSql="insert into user_tb(push_tocken) values($1)";
  const values=[push_tocken];

   db.query(userInformSql,values,(err,res)=>{
    if(err){
      console.log(err.stack)
    }else{
      console.log(res.rows[0])
      res.send('userID: '+ user_id)
    }
  })
});

//ordertable에서 userID가 같은 주문들을 시간순으로 리턴
app.post('/account/orderHistory',(req,res)=>{
  let user_id=req.body.user_id;
  console.log("connect ${user_id}");

  const orderSql="select order_tb.user_order_menu_id, menu_id, option_id, count from order_tb natural join user_order_menu_tb where user_id=$1  order by order_date_time";
  const values=[user_id];

   db.query(orderSql,values,(err,res)=>{
    if(err){
      console.log(err.stack)
    }else{
      let result={
        orderList: res.rows
      };
      sendResult(res, result);
     
    }
  })
});

//ListData
//위치를 받아서 그 위치 xxm 안의 푸드트럭들을 리스트로 리턴 없으면 즐겨찾기?
app.post('/listData/foodtruck',(req,res)=>{
  let location=req.body.location;
  console.log("connect ${location}");

  const listSql="select * from foodtruck_tb where ST_DistanceSphere(location, $1)<=500";
  const values=[location];

   db.query(listSql,values,(err,res)=>{
    if(err){
      console.log(err.stack)
    }else{
      let result={
        orderList: res.rows
      };
      sendResult(res, result);
    }
  })
});

//foodtruckID를 받으면 그 푸드트럭의 메뉴 리스트를 리턴
app.post('/listData/menu',(req,res)=>{
  let foodtruck_id=req.body.foodtruck_id;
  console.log("connect ${foodtruck_id}");

  const menuSql="select * from menu_tb where foodtruck_id=$1";
  const values=[foodtruck_id];

   db.query(menuSql,values,(err,res)=>{
    if(err){
      console.log(err.stack)
    }else{
      let result={
        orderList: res.rows
      };
      sendResult(res, result);
    }
  })
});

//foodtruckID menuID 받으면 옵션들 리턴
app.post('/listData/option',(req,res)=>{
  let foodtruck_id=req.body.foodtruck_id;
  let menu_id=req.body.menu_id;
  console.log("connect ${foodtruck_id}, ${menu_id}");

  const optionSql="select * from option_tb where foodtruck_id=$1 and menu_id=$2";
  const values=[foodtruck_id, menu_id];

   db.query(optionSql,values,(err,res)=>{
    if(err){
      console.log(err.stack)
    }else{
      let result={
        orderList: res.rows
      };
      sendResult(res, result);
    }
  })
});

//infoData
//foodtruckID받으면 푸드트럭의 정보 리턴
app.post('/infoData/foodtruck',(req,res)=>{
  let foodtruck_id=req.body.foodtruck_id;
  console.log("connect ${foodtruck_id}");

  const foodtruckSql="select * from foodtruck_tb where foodtruck_id=$1";
  const values=[foodtruck_id];

   db.query(foodtruckSql,values,(err,res)=>{
    if(err){
      console.log(err.stack)
    }else{
      let result={
        orderList: res.rows
      };
      sendResult(res, result);
    }
  })
});

//foodtruckID, menuID받으면 메뉴 정보 리턴
app.post('/infoData/menu',(req,res)=>{
  let foodtruck_id=req.body.foodtruck_id;
  let menu_id=req.body.menu_id;
  console.log("connect ${foodtruck_id}, ${menu_id}");

  const optionSql="select * from menu_tb where foodtruck_id=$1 and menu_id=$2";
  const values=[foodtruck_id, menu_id];

   db.query(optionSql,values,(err,res)=>{
    if(err){
      console.log(err.stack)
    }else{
      let result={
        orderList: res.rows
      };
      sendResult(res, result);
    }
  })
});

//order
//orderList받으면 그 오더들을 각 푸드트럭에 전달한 뒤, 각 푸드트럭이 응답하면 모으고 orderID를 부여한 뒤 리턴
// app.post('/order/request',(req,res)=>{
//   let foodtruck_id=req.body.foodtruck_id;
//   let menu_id=req.body.menu_id;
//   console.log("connect ${foodtruck_id}, ${menu_id}");

//   const optionSql="select * from menu_tb where foodtruck_id=$1 and menu_id=$2";
//   const values=[foodtruck_id, menu_id];

//    db.query(optionSql,values,(err,res)=>{
//     if(err){
//       console.log(err.stack)
//     }else{
//       let result={
//         orderList: res.rows
//       };
//       sendResult(res, result);
//     }
//   })
// });



//수령확인한 orderID를 받아 푸드트럭에 전달하고 응답을 받으면 리턴

/*
//주문했을때
app.post('/insertOrder',(req,res)=>{
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
app.listen(8888, function(){
  console.log("server starting with 8888")
});


