//기본 라우팅 소스코드
//1.express모듈 사용하기 위해 require 함수로 불러옴
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const port=8080 
//const db=new (require('./Database_Connecter'))('./main/FoodPassServer/db_configure.json');

var compression=require('compression')
var accountRouter=require('./routes/account')
var foodtruckRouter=require('./routes/foodtruck')
var infoDataRouter=require('./routes/infoData')
var listDataRouter=require('./routes/listData')
var mainRouter=require('./routes/main')
var orderRouter=require('./routes/order')

//2.라우팅 객체 만듦.
const app=express();

app.use(cors());
app.use(bodyParser.json({extended: true}))
app.use(compression())


app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});


app.use('/', mainRouter)
app.use('/account', accountRouter)
app.use('/foodtruck', foodtruckRouter)
app.use('/infoData', infoDataRouter)
app.use('/listData', listDataRouter)
app.use('/order', orderRouter)


app.use((req,res, next)=>{
  res.status(404).send('[404 error] sorry cant find that!')
})

app.use((err, req,res,next)=>{
  console.error(err.stack)
  res.status(500).send('[500 error] Something broke!')
})

//4. 서버 열기
app.listen(port, function(){
  console.log(`server starting with ${port}`)
});





// //데이터 입력
// app.post('/insertTruck',(req,res)=>{
//   let data=req.body.data;
//   let name=data.name;
//   let image=data.imgSrc;
//   let introduction=data.introduction;
//   let notice=data.notice;
//   //let origin_information=data.origin_information;
//   let location_lat=data.location.lat;//형태고민
//   let location_lng=data.location.lng;
  


//   const truckInformSql="insert into foodtruck_tb(name, image, introduction, notice, location) values($1, $2, $3, $4, st_setsrid(ST_MakePoint($6, $5), 4326)) Returning *";
//   const values=[name,image,introduction,notice,location_lat, location_lng];
//   db.query(truckInformSql,values).then(res2=>{


//    sendResult(res, result);
//   })
//  .catch(err=>{
// console.log(err.stack)
// sendError(err, {description: ''})
//  })   
// });

// app.post('/insertMenu',(req,res)=>{
//   let data=req.body.data;
//   let foodtruck_id=data.id;
//   let name=data.menuName;
//   let image=data.imgsrc;
//   let introduction=data.menuInformation;
//   let price=data.price;
//  // let allergy_information=data.allergy_information;

//   const menuInformSql="insert into menu_tb(foodtruck_id, name,image ,introduction ,price ) values($1,$2,$3,$4,$5) Returning *";
//   const values=[foodtruck_id,name,image,introduction,price];

//    db.query(menuInformSql,values).then(res2=>{
//     sendResult(res,result);
//   })
//   .catch(err=>{
//     console.log(err.stack)
//     sendError(err, {description: ''})
//   })
 
// });


// app.post('/insertOption',(req,res)=>{
//   let data=req.body.data;
//   let menu_id=data.menuID;
//   let name=data.name;
//   let extra_price=data.extraPrice;

//   const optionInformSql="insert into option_tb(menu_id,name,price) values($1,$2,$3) Returning *";
//   const values=[menu_id,name,extra_price];

//    db.query(optionInformSql,values).then(res2=>{
//     sendResult(res,result);
//   })
//   .catch(err=>{
//     console.log(err.stack)
//     sendError(err, {description: ''})
//   })

// });


// //account
// //user만들고 아이디 리턴
// app.post('/account/create',(req,res)=>{

  
//   const Sql="insert into user_tb values(default) Returning user_id";
 
//    db.query(Sql).then(res2 =>{
//     let data={
//       accountId: res2.rows[0].user_id
    
//     };
//     console.log(`account created: ${data.accountId}`);

//     sendResult(res, data);
//    })
//    .catch(err=>{
//     console.log(err.stack)
//     sendError(err, {description: ''});
//    });
  
// });

// //pushToken
// app.post('/account/pushToken',(req,res)=>{
//   let data=req.body.data;
//   let userId = req.body.userId;
//   let push_token=data.token;

//   const Sql = "update user_tb set push_token=$1 where user_id=$2";
//   const values=[push_token, userId];

//    db.query(Sql,values).then(res2=>{
//      console.log(`push token saved for account: ${userId}`);

//     // res2.rows.forEach(element=>{
//     //   let tokeninfo={
//     //     token: element.push_token
//     //   }
//     //   result.data.push(tokeninfo);
//     // });
  
//   sendResult(res, {});
//   //res.send('pushToken: '+ push_token)
// })
// .catch(err=>{
//   console.log(err.stack)
//   sendError(err, {description: ''});
// });
// });

// //ordertable에서 userID가 같은 주문들을 시간순으로 리턴
// app.post('/account/orderHistory',(req,res)=>{
  
//   console.log(`order history of account: ${req.body.userId}`);
//   // console.log("order history");

//   //줘야하는것 : foodtruckid, price, id

//   const historySql = `select user_order_menu_id as id, foodtruck_tb.foodtruck_id as foodtruck_id,
//   price, name, introduction, notice, image
//   from user_order_menu_tb inner join foodtruck_tb
//   on user_order_menu_tb.foodtruck_id=foodtruck_tb.foodtruck_id
//   where user_id=${req.body.userId} order by order_date_time`;

//   db.query(historySql).then(val =>{
//     let data = {
//       historyList: []
//     };

//     val.rows.forEach(val =>{
//       data.historyList.push({
//         id: val.id,
//         price: val.price,
//         foodtruckInfo: {
//           id: val.foodtruck_id,
//           name: val.name,
//           // imgSrc: image,
//           introduction: val.introduction,
//           notice: val.notice
//         }
//       })
//     })

//     sendResult(res, data);
//   })

// });

// //ListData
// //위치를 받아서 그 위치 xxm 안의 푸드트럭들을 리스트로 리턴 없으면 즐겨찾기?
// app.post('/listData/foodtruck',(req,res)=>{
//   console.log(req.body);

//   let data=req.body.data;
//   let location_lat=data.location.lat;//위치 형식 다시 고민해보기
//   let location_lng=data.location.lng;
//   //let name=data.foodtruckList.name;
//   //let notice=data.foodtruckList.notice;
//   // console.log("connect ${location}");
//   console.log(`get foodtruckList location: { lat: ${location_lat}, lng: ${location_lng} }`);

//   const listSql="select foodtruck_id, st_x(location) as x, st_y(location) as y, name, image, introduction, notice from foodtruck_tb where ST_DistanceSphere(location,ST_MakePoint($2, $1))<=500";
//   const values=[location_lat, location_lng];

//    db.query(listSql,values).then(res2 =>{
//     let data = {
//         foodtruckList: []
//     };

//     res2.rows.forEach(element => {
//       let ftinfo = {
//         id: element.foodtruck_id,
//         //imgSrc: element.image,
//         introduction: element.introduction,
//         location:{
//           lng:element.x,
//           lat:element.y
//         },
//         name: element.name,
//         notice: element.notice,
//         //origin_information: element.origin_information
//       }
//       data.foodtruckList.push(ftinfo);
//     });
//     sendResult(res, data);
//    })
//    .catch(err=>{
//     console.log(err.stack)
//     sendError(err, {description: ''});
//    });
//   });
//   //  ,(err,res)=>{
//   //   if(err){
//   //     console.log(err.stack)
//   //     sendError(err, {description: ''})
//   //   }else{
      
//   //     let result={
//   //       foodtruckList: res.rows
//   //     };
//   //     sendResult(res, result);
//   //   }

// //});

// //foodtruckID를 받으면 그 푸드트럭의 메뉴 리스트를 리턴
// app.post('/listData/menu',(req,res)=>{
//   let data=req.body.data;
//   let foodtruck_id=data.foodtruckId;

//   const menuSql="select menu_id, name, introduction,price,image from menu_tb where foodtruck_id=$1";
//   const values=[foodtruck_id];

//   console.log(`get menuList of foodtruck: ${foodtruck_id}`);

//    db.query(menuSql,values).then(res2=>{
//      let data={
//          menuList: []
//      };
//      res2.rows.forEach(element=>{
//        let menuinfo={
//          menuID: element.menu_id,
//          menuName: element.name,
//          menuInformation: element.introduction,
//          price: element.price,
//          //imgsrc=element.image

//        }
//        data.menuList.push(menuinfo);
//      });
//      sendResult(res,data);
   
//   })
//   .catch(err=>{
//     console.log(err.stack)
//     sendError(err, {description: ''});
//   });
// });

// //foodtruckID menuID 받으면 옵션들 리턴
// app.post('/listData/option',(req,res)=>{
//   let data=req.body.data;
//   let foodtruck_id=data.foodtruckId;
//   let menu_id=data.menuId;

//   //당장은 foodtruckid가 같을 필요가 없음
//   const optionSql="select option_id,name, extra_price from option_tb where foodtruck_id=$1 and menu_id=$2";
//   const values=[foodtruck_id, menu_id];

//   console.log(`get optionList of foodtruck: ${foodtruck_id}, menu: ${menu_id}`);

//    db.query(optionSql,values).then(res2=>{
//      let data={
       
//          optionList:[]
       
//      };
//      res2.rows.forEach(element=>{
//        let optioninfo={
//          id: element.option_id,
//          name: element.name,
//          extraPrice: element.extra_price
//        }
//         data.optionList.push(optioninfo);
//      })
//     sendResult(res,data);
//   })
//   .catch(err=>{
//     console.log(err.stack)
//     sendError(err,{description: ''});
//   });
// });

// //infoData
// //foodtruckID받으면 푸드트럭의 정보 리턴
// app.post('/infoData/foodtruck',(req,res)=>{
//   let data=req.body.data;
//   let foodtruck_id=data.foodtruckId;
//   console.log("connect ${foodtruck_id}");

//   const foodtruckSql="select *, st_x(location) as x, st_y(location) as y from foodtruck_tb where foodtruck_id=$1";
//   const values=[foodtruck_id];

//    db.query(foodtruckSql,values).then(res2=>{
//      //여기엔 메뉴리스트 붙일 예정
//      const foodtruck = res2.rows[0];
//      let data={
//          foodtruckData: {
//            id: foodtruck.foodtruck_id,
//            introduction: foodtruck.introduction,
//            location: {
//              lng: foodtruck.x,
//              lat: foodtruck.y
//            },
//            name : foodtruck.name,
//            notice: foodtruck.notice
//          }
//      };
    
//     //  res2.rows.forEach(element => {
//     //   let ftinfo = {
//     //     id: element.foodtruck_id,
//     //     //imgSrc: element.image,
//     //     introduction: element.introduction,
//     //     location:{
//     //       lng:element.x,
//     //       lat:element.y
//     //     },
//     //     name: element.name,
//     //     notice: element.notice,
//     //     //origin_information: element.origin_information
//     //   }
//       // result.data.foodtruckList.push(ftinfo);
//       sendResult(res, data);
    
//    })


//    .catch(err=>{
//     console.log(err.stack)
//     sendError(err, {description: ''});
//    });
// });

// //foodtruckID, menuID받으면 메뉴 정보 리턴
// app.post('/infoData/menu',(req,res)=>{
//   let data=req.body.data;
//   let foodtruck_id=data.foodtruckId;
//   let menu_id=data.menuId;
//   console.log("connect ${foodtruck_id}, ${menu_id}");

//   const optionSql="select * from menu_tb where foodtruck_id=$1 and menu_id=$2";
//   const values=[foodtruck_id, menu_id];

//   db.query(menuSql,values).then(res2=>{
//     //여기에 옵션리스트도 곧 붙일 예정
//     let element = res2.rows[0];
//     let data={
//       menuData: {
//         menuID: element.menu_id,
//         menuName: element.name,
//         menuInformation: element.introduction,
//         price: element.price,
//       }
      
      
//     };
//     // res2.rows.forEach(element=>{
//     //   let menuinfo={
//     //     menuID=element.menu_id,
//     //     menuName=element.name,
//     //     menuInformation=element.introduction,
//     //     price=element.price,
//     //     //imgsrc=element.image

//     //   }
//     //   result.data.menuList.push(menuinfo);
//     // });
//     sendResult(res,data);
  
//  })
//  .catch(err=>{
//    console.log(err.stack)
//    sendError(err, {description: ''});
//  });
// });

// //order
// //orderList받으면 그 오더들을 각 푸드트럭에 전달한 뒤, 각 푸드트럭이 응답하면 
// //신호 모으고 orderID를 부여한 뒤 리턴
// app.post('/order/request',(req,res)=>{
//   console.log('/order/request');

//   order(req, res);

// });

// async function order(req, res){
  
//   let orderList = req.body.data.orderList;

//   //일단 넣고 응답만
//   await db.query('BEGIN')
//   try {
//   // console.log('begin');
//   let data = {
//     orderList : []
//   }

//   let relation_valid_sql = `select foodtruck_id from relation_user_foodtruck_tb where user_id=${req.body.userId} and foodtruck_id=${orderList[0].foodtruckId}`;
//   let foodtruckIdList = []
//   let user_order_sql = "insert into user_order_menu_tb(user_order_menu_id, user_id, foodtruck_id, price) values"

//   orderList.forEach((val, index) =>{
//     foodtruckIdList.push(val.foodtruckId);
//     user_order_sql = user_order_sql.concat(` (default, ${req.body.userId}, ${val.foodtruckId}, ${val.price})`);
//     if(index > 0){
//       relation_valid_sql = relation_valid_sql.concat(` or user_id=${req.body.userId} and foodtruck_id=${val.foodtruckId}`);
//     }
//   })
//   // console.log('relation check: ' + relation_valid_sql);

//   user_order_sql = user_order_sql.concat(` returning user_order_menu_id as id`);

//   let rel_val = await db.query(relation_valid_sql)
//   console.log(`relation checked`);
//   let rel_required = [];
//   if(rel_val.rows.length == 0){
//     rel_required = foodtruckIdList;
//   }
//   rel_val.rows.forEach(relval=>{
//     // console.log(relval);
//     let isReady = false;
//     foodtruckIdList.forEach(ftId =>{
//       // console.log(ftId);
//       if(relval.foodtruck_id == ftId){
//         isReady = true;
//         // break;
//       }
//     })
//     if(!isReady){
//       // console.log('new foodtruck!: relval.foodtruck_id');
//       rel_required.push(relval.foodtruck_id);
//     }
//   })
  
//   // let rel_required = foodtruckIdList.filter(v => !rel_val.rows.includes({ foodtruck_id: v }));
  
//   if(rel_required.length > 0){
//     let rel_create_sql = `insert into relation_user_foodtruck_tb(user_id, foodtruck_id) values`
//     rel_required.forEach(val =>{
//       rel_create_sql = rel_create_sql.concat(` (${req.body.userId}, ${val})`);
//     })
//     // console.log('create relation: ' + rel_create_sql);
//     await db.query(rel_create_sql)
//   }
  
    
//   console.log('order insert : ' + user_order_sql);
//   db.query(user_order_sql).then(user_order_val =>{
//     let order_info_sql = "insert into order_tb(user_order_menu_id, menu_id, option_id, count) values"
//     user_order_val.rows.forEach((val, index) =>{
//       orderList[index].id = val.id;
//       orderList[index].orderedMenu.forEach((menuval) =>{
//         order_info_sql = order_info_sql.concat(` (${val.id}, ${menuval.menuId}, ${menuval.optionId}, ${menuval.amount})`);
//       })

//       data.orderList.push({id: val.id, foodtruckId: orderList[index].foodtruckId});
//     })
    
//     // console.log('orderInfo insert: ', order_info_sql);

//     db.query(order_info_sql).then(() =>{
//       db.query('COMMIT').then(()=>{
//         console.log('ordered');
//         sendResult(res, data);
//       })
//     })
//   })
// } catch(e){
//   db.query('ROLLBACK');
//     console.log(e);

//     sendError(e, {});
//   }

  
// }


// app.post('/order/received', (req, res) =>{
//   let orderId = req.body.data.orderId;
//   console.log('order received: ' + orderId);
//   //is_received : true하기

//   sendResult(res, {});
// })

// //수령확인한 orderID를 받아 푸드트럭에 전달하고 응답을 받으면 리턴

// /*
// //주문했을때
// app.post('/insertOrder',(req,res)=>{
//    let data=req.body.data;
//   let user_id=req.body.user_id;
//   let foodtruck_id=req.body.foodtruck_id;
//   let menu_id=req.body.menu_id;
//   let option_id=req.body.option_id;
//   let menu_num=req.body.menu_num;
//   let option_num=req.body.option_num;
//   let order_date_time=req.body.order_date_time;
//   let price=req.body.price;
//   let is_paid=req.body.is_paid;
//   let other_request=req.body.other_request;
//   let order_number=req.body.order_number;

//   const orderSql="insert into user_order_menu_tb(user_id,foodtruck_id,menu_id,option_id,menu_num,option_num,order_date_time,price,is_paid,other_request,order_number) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11);
//   const values=[user_id,foodtruck_id,menu_id,option_id,menu_num,option_num,order_date_time,price,is_paid,other_request,order_number];

//    db.query(orderSql,values,(err,res)=>{
//      if()
//     if(err){
//       console.log(err.stack)
//     }else{
//       console.log(res.rows[0])
//       res.send('order_number: '+order_number)
//     }
//   })
// });
// */

