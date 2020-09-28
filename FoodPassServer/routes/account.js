//account
const express=require('express')
const app=express.Router();
const db=new (require('../Database_Connecter'))('./main/FoodPassServer/db_configure.json');

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

//user만들고 아이디 리턴
app.post('/create',(req,res)=>{

  
    const Sql="insert into user_tb values(default) Returning user_id";
   
     db.query(Sql).then(res2 =>{
      let data={
        accountId: res2.rows[0].user_id
      
      };
      console.log(`account created: ${data.accountId}`);
  
      sendResult(res, data);
     })
     .catch(err=>{
      console.log(err.stack)
      sendError(err, {description: ''});
     });
    
  });
  
  //pushToken
  app.post('/pushToken',(req,res)=>{
    let data=req.body.data;
    let userId = data.userId;//------>req.body.userId 수정함.
    let push_token=data.token;
  
    const Sql = "update user_tb set push_token=$1 where user_id=$2";
    const values=[push_token, userId];
  
     db.query(Sql,values).then(res2=>{
       console.log(`push token saved for account: ${userId}`);
  
      // res2.rows.forEach(element=>{
      //   let tokeninfo={
      //     token: element.push_token
      //   }
      //   result.data.push(tokeninfo);
      // });
    
    sendResult(res, {});
    //res.send('pushToken: '+ push_token)
  })
  .catch(err=>{
    console.log(err.stack)
    sendError(err, {description: ''});
  });
  });
  
  //ordertable에서 userID가 같은 주문들을 시간순으로 리턴
  app.post('/orderHistory',(req,res)=>{
    
    console.log(`order history of account: ${req.body.userId}`);
    // console.log("order history");
  
    //줘야하는것 : foodtruckid, price, id
  
    const historySql = `select user_order_menu_id as id, foodtruck_tb.foodtruck_id as foodtruck_id,
    price, name, introduction, notice, image
    from user_order_menu_tb inner join foodtruck_tb
    on user_order_menu_tb.foodtruck_id=foodtruck_tb.foodtruck_id
    where user_id=${req.body.userId} order by order_date_time`;
  
    db.query(historySql).then(val =>{
      let data = {
        historyList: []
      };
  
      val.rows.forEach(val =>{
        data.historyList.push({
          id: val.id,
          price: val.price,
          foodtruckInfo: {
            id: val.foodtruck_id,
            name: val.name,
            introduction: val.introduction,
            notice: val.notice
          }
        })
      })
  
      sendResult(res, data);
    })
  
  });


  //user id 와 foodtruck id 를 받아서 authority=pure면 평점 입력하기
  app.post('/giveRating',(req,res)=>{
    let data=req.body.data;
    let ratingData=data.rating;
    let userId=data.userId;
    let foodtruckId=data.foodtruckId;
    let authority=data.authority;
    

    console.log(`userId: ${userId}, foodtruckId: ${foodtruckId}, authority: ${authority}, ratingData: ${ratingData}`)
    if(authority="pure"){
      const Sql="update relation_user_foodtruck_tb set rating=$1 where user_id=$2 and foodtruci_id=$3 Returning user_id";
      const values=[  ratingData, userId,foodtruckId];
  
       db.query(Sql, values).then(res2 =>{
        sendResult(res, result);
       })
       .catch(err=>{
        console.log(err.stack)
        sendError(err, {description: ''});
       });
      
    }else{
      sendResult(res, {description: '권한없음'})
    }
   
  });

  module.exports=app;