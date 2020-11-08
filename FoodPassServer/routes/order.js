//order
const express = require('express')
const app = express.Router();
const path = require('path');
const db=new (require('../Database_Connecter'))(path.join(__dirname,'../db_configure.json'));


//function
function sendResult(res, json) {
  let result = {
    result: true,
    data: json
  }
  // json.result=true;
  res.send(JSON.stringify(result));
}

function sendError(res, json) {
  json.result = false;
  res.send(JSON.stringify(json));
}


//orderList받으면 그 오더들을 각 푸드트럭에 전달한 뒤, 각 푸드트럭이 응답하면 
//신호 모으고 orderID를 부여한 뒤 리턴
app.post('/create', (req, res) => {
  console.log('/order/create');

  order(req, res);

});

// //사장이 주문을 수락하면 서버는 손님이랑 사장한테 주문 수락 처리됐다고 알림--->order 함수에 이미 있는듯?
// app.post('/permit', (req, res) => {
//   let orderId = req.body.data.orderId;
//   console.log('order received: ' + orderId);
//   //is_received : true하기

//   sendResult(res, {});
// })

//손님 대기화면에 수령못한 주문목록 나타내기

app.post('/waiting', (req, res) => {
  let data = req.body.data;
  let userId= data.userId;
  console.log('주문대기목록 order/wating userId:', userId)
  const Sql = "select * from user_order_menu_tb where user_id=$1 and is_received=false;";
  const values = [userId];
  let idData={
    userorderIdList:[]
  }
 
  db.query(Sql, values).then(res2 => {
    let data={
      orderWaitingList:[]
    };
    res2.rows.forEach(element=>{
      let info={
        id:element.user_order_menu_id,
        foodtruckId:element.foodtruck_id,
        orderedMenu:[],
        price:element.price,
        orderNo:element.order_number,
       
      }
      idData.userorderIdList.push(element.user_order_menu_id)
    

     // console.log(`info: `,info)
      data.orderWaitingList.push(info);
    })


   
    idData.userorderIdList.forEach((id, index)=>{
      const sql3="select * from order_tb where user_order_menu_id=$1;"
      const values3=[id]
      //console.log('menu: ', values3)
      db.query(sql3, values3).then(res3=>{
        //console.log('db3: ', res3)
        res3.rows.forEach(element3=>{
          let orderedMenu={
            menuId:element3.menu_id,
            optionId:element3.option_id,
            amount:element3.count
          }
         
          data.orderWaitingList[index].orderedMenu.push(orderedMenu)
          console.log(`orderedMenu: `,data.orderWaitingList[index].orderedMenu)
        })
        //console.log(`data: `, data)
        
      }).catch(err3 => {
        console.log(err3.stack)
        sendError(err3, { description: '' })
      })

      sendResult(res, data);
    })
    
  })

})

//푸드트럭 주문 준비 다 돼서 손님 호출
app.post('/ready', (req, res) => {
 
  let data = req.body.data;
  let foodtruckId = data.foodtruckId;
  let user_order_menu_id = data.orderId;
  console.log(`order/ready`, foodtruckId, user_order_menu_id)
  const Sql = "update user_order_menu_tb set finished_time=current_timestamp where foodtruck_id=$1 and user_order_menu_id=$2  Returning user_order_menu_id, user_id, foodtruck_id, finished_time";
  const values = [foodtruckId, user_order_menu_id];

  db.query(Sql, values).then(res2 => {
    sendResult(res, res2);
  })
    .catch(err => {
      console.log(err.stack)
      sendError(err, { description: '' })
    })
})


//수령확인한 orderID를 받아 푸드트럭에 전달하고 응답을 받으면 리턴
app.post('/finish', (req, res) => {
  let data = req.body.data;
  let orderId = data.orderId;

  console.log('order received and finished: ' + orderId);
  //is_received : true하기
  const sql = "update user_order_menu_tb set is_received=true where user_order_menu_id=$1 returning user_order_menu_id, is_received"
  const values = [orderId];

  db.query(sql, values).then(res2 => {
    sendResult(res, res2);
  })
    .catch(err => {
      console.log(err.stack)
      sendError(err, { description: '' })
    })
})


//사장이 주문 확인하는 창
app.post('/confirm', (req, res) => {
  
  let data = req.body.data;
  let foodtruckId = data.foodtruckId;
  console.log('order/confirm', foodtruckId)
  const Sql = 
  `select user_order_menu_tb.user_order_menu_id, user_order_menu_tb.foodtruck_id , user_order_menu_tb.order_number, user_order_menu_tb.user_id  , menu_tb.menu_id as menu_id, option_tb.option_id as option_id , order_tb.count , user_order_menu_tb.other_request
    from user_order_menu_tb 
      inner join order_tb on user_order_menu_tb.user_order_menu_id =order_tb.user_order_menu_id
      inner join menu_tb on order_tb.menu_id =menu_tb.menu_id 
      left outer join option_tb on order_tb.option_id =option_tb.option_id
    where user_order_menu_tb.foodtruck_id=$1
    order by user_order_menu_tb.order_number;`;
    //Returning user_order_menu_tb.foodtruck_id , user_order_menu_tb.order_number, user_order_menu_tb.user_id  , menu_tb.menu_id, option_tb.option_id, order_tb.count , user_order_menu_tb.other_request`;
  

  //const Sql2="select num_of_waiting from statistics_tb where foodtruck_id=$1 ;"
  const values = [foodtruckId];
  db.query(Sql, values).then(res2 => {
    let data = {
      orderConfirmList: []
    }
   
    res2.rows.forEach(element => {
      let orderInfo = {
        id:element.user_order_menu_id,
        foodtruckId: element.foodtruck_id ,
        orderNo: element.order_number,
        userId:element.user_id,
        orderedMenu:{
          menuId:element.menu_id,
          optionId:element.option_id,
          amount:element.count,
        },     
        otherRequest:element.other_request,
       // waiting: element.num_of_waiting
      }
      data.orderConfirmList.push(orderInfo)
    });
    sendResult(res, data);
  })
    .catch(err => {
      console.log(err.stack)
      sendError(err, { description: '' })
    })

});




async function order(req, res) {

  let orderList = req.body.data.orderList;

  //일단 넣고 응답만
  await db.query('BEGIN')
  try {
    console.log('order begin');
    let data = {
      orderList: []
    }

    let relation_valid_sql = `select foodtruck_id from relation_user_foodtruck_tb where (user_id=${req.body.userId} and foodtruck_id=${orderList[0].foodtruckId})`;
    let foodtruckIdList = []
    //let user_order_sql = "insert into user_order_menu_tb(user_order_menu_id, user_id, foodtruck_id, price) values"
    let user_order_sql = "insert into user_order_menu_tb(user_id, foodtruck_id, price) values"

    orderList.forEach((val, index) => {
      foodtruckIdList.push(val.foodtruckId);
      if(index>0){
        user_order_sql=user_order_sql.concat(`,`);
      }
   // user_order_sql = user_order_sql.concat(` (default, ${req.body.userId}, ${val.foodtruckId}, ${val.price})`);

    user_order_sql = user_order_sql.concat(` (${req.body.userId}, ${val.foodtruckId}, ${val.price})`);
      if (index > 0) {
        
        relation_valid_sql = relation_valid_sql.concat(` or( user_id=${req.body.userId} and foodtruck_id=${val.foodtruckId})`);
        
      }
    })
    // console.log('relation check: ' + relation_valid_sql);

    user_order_sql = user_order_sql.concat(` returning user_order_menu_id as id`);

    let rel_val = await db.query(relation_valid_sql)
    console.log(`relation checked`);
    let rel_required = [];
    if (rel_val.rows.length == 0) {
      rel_required = foodtruckIdList;
    }
    rel_val.rows.forEach(relval => {
      // console.log(relval);
      let isReady = false;
      foodtruckIdList.forEach(ftId => {
        // console.log(ftId);
        if (relval.foodtruck_id == ftId) {
          isReady = true;
          // break;
        }
      })
      if (!isReady) {
        // console.log('new foodtruck!: relval.foodtruck_id');
        rel_required.push(relval.foodtruck_id);
      }
    })

    // let rel_required = foodtruckIdList.filter(v => !rel_val.rows.includes({ foodtruck_id: v }));
    console.log('create relation rel required: ' , rel_required);
    if (rel_required.length > 0) {
      let rel_create_sql = `insert into relation_user_foodtruck_tb(user_id, foodtruck_id) values`
      rel_required.forEach((val, index) => {
        if(index>0){
          rel_create_sql = rel_create_sql.concat(`,`)
        }
        rel_create_sql = rel_create_sql.concat(` (${req.body.userId}, ${val})`);
        
      })
      //console.log('create relation: ' , rel_create_sql);
      await db.query(rel_create_sql)
    }


    console.log('order insert : ' + user_order_sql);
    db.query(user_order_sql).then(user_order_val => {
      let order_info_sql = "insert into order_tb(user_order_menu_id, menu_id, option_id, count) values"
     // console.log(`user_order_val:`, user_order_val)
      user_order_val.rows.forEach((val, index) => {
     //  console.log(`user_order_menu_id: `, val.id)
        orderList[index].id = val.id;
        if(index>0){
          order_info_sql = order_info_sql.concat(`,`);
        }
        orderList[index].orderedMenu.forEach((menuval, index2) => {
          
          order_info_sql = order_info_sql.concat(` (${val.id}, ${menuval.menuId}, ${menuval.optionId}, ${menuval.amount})`);
          
         
         
        })

        data.orderList.push({ id: val.id, foodtruckId: orderList[index].foodtruckId });
      })

     // console.log('orderInfo insert: ', order_info_sql);
      //console.log(order_info_sql)
      db.query(order_info_sql).then(() => {
        db.query('COMMIT').then(() => {
          console.log('ordered');
          sendResult(res, data);
        })
      })
    })
  } catch (e) {
    db.query('ROLLBACK');
    console.log(e);

    sendError(e, {});
  }


}

module.exports = app;