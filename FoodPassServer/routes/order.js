//order
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


//orderList받으면 그 오더들을 각 푸드트럭에 전달한 뒤, 각 푸드트럭이 응답하면 
//신호 모으고 orderID를 부여한 뒤 리턴
app.post('/request',(req,res)=>{
    console.log('/order/request');
  
    order(req, res);
  
  });
  
  async function order(req, res){
    
    let orderList = req.body.data.orderList;
  
    //일단 넣고 응답만
    await db.query('BEGIN')
    try {
    // console.log('begin');
    let data = {
      orderList : []
    }
  
    let relation_valid_sql = `select foodtruck_id from relation_user_foodtruck_tb where user_id=${req.body.userId} and foodtruck_id=${orderList[0].foodtruckId}`;
    let foodtruckIdList = []
    let user_order_sql = "insert into user_order_menu_tb(user_order_menu_id, user_id, foodtruck_id, price) values"
  
    orderList.forEach((val, index) =>{
      foodtruckIdList.push(val.foodtruckId);
      user_order_sql = user_order_sql.concat(` (default, ${req.body.userId}, ${val.foodtruckId}, ${val.price})`);
      if(index > 0){
        relation_valid_sql = relation_valid_sql.concat(` or user_id=${req.body.userId} and foodtruck_id=${val.foodtruckId}`);
      }
    })
    // console.log('relation check: ' + relation_valid_sql);
  
    user_order_sql = user_order_sql.concat(` returning user_order_menu_id as id`);
  
    let rel_val = await db.query(relation_valid_sql)
    console.log(`relation checked`);
    let rel_required = [];
    if(rel_val.rows.length == 0){
      rel_required = foodtruckIdList;
    }
    rel_val.rows.forEach(relval=>{
      // console.log(relval);
      let isReady = false;
      foodtruckIdList.forEach(ftId =>{
        // console.log(ftId);
        if(relval.foodtruck_id == ftId){
          isReady = true;
          // break;
        }
      })
      if(!isReady){
        // console.log('new foodtruck!: relval.foodtruck_id');
        rel_required.push(relval.foodtruck_id);
      }
    })
    
    // let rel_required = foodtruckIdList.filter(v => !rel_val.rows.includes({ foodtruck_id: v }));
    
    if(rel_required.length > 0){
      let rel_create_sql = `insert into relation_user_foodtruck_tb(user_id, foodtruck_id) values`
      rel_required.forEach(val =>{
        rel_create_sql = rel_create_sql.concat(` (${req.body.userId}, ${val})`);
      })
      // console.log('create relation: ' + rel_create_sql);
      await db.query(rel_create_sql)
    }
    
      
    console.log('order insert : ' + user_order_sql);
    db.query(user_order_sql).then(user_order_val =>{
      let order_info_sql = "insert into order_tb(user_order_menu_id, menu_id, option_id, count) values"
      user_order_val.rows.forEach((val, index) =>{
        orderList[index].id = val.id;
        orderList[index].orderedMenu.forEach((menuval) =>{
          order_info_sql = order_info_sql.concat(` (${val.id}, ${menuval.menuId}, ${menuval.optionId}, ${menuval.amount})`);
        })
  
        data.orderList.push({id: val.id, foodtruckId: orderList[index].foodtruckId});
      })
      
      // console.log('orderInfo insert: ', order_info_sql);
  
      db.query(order_info_sql).then(() =>{
        db.query('COMMIT').then(()=>{
          console.log('ordered');
          sendResult(res, data);
        })
      })
    })
  } catch(e){
    db.query('ROLLBACK');
      console.log(e);
  
      sendError(e, {});
    }
  
    
  }
  
  
  app.post('/received', (req, res) =>{
    let orderId = req.body.data.orderId;
    console.log('order received: ' + orderId);
    //is_received : true하기
  
    sendResult(res, {});
  })
  
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
 module.exports=app;