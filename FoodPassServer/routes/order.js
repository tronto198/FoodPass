//order
const express = require('express')
const app = express.Router();
const db = new (require('../Database_Connecter'))('./main/FoodPassServer/db_configure.json');


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

//
app.post('/ready', (req, res) => {
  let orderId = req.body.data.orderId;
  console.log('order is ready: ' + orderId);
  //is_received : true하기

  sendResult(res, {});
})


//수령확인한 orderID를 받아 푸드트럭에 전달하고 응답을 받으면 리턴
app.post('/finish', (req, res) => {
  let orderId = req.body.data.orderId;
  console.log('order received and finished: ' + orderId);
  //is_received : true하기

  sendResult(res, {});
})



async function order(req, res) {

  let orderList = req.body.data.orderList;

  //일단 넣고 응답만
  await db.query('BEGIN')
  try {
    // console.log('begin');
    let data = {
      orderList: []
    }

    let relation_valid_sql = `select foodtruck_id from relation_user_foodtruck_tb where user_id=${req.body.userId} and foodtruck_id=${orderList[0].foodtruckId}`;
    let foodtruckIdList = []
    let user_order_sql = "insert into user_order_menu_tb(user_order_menu_id, user_id, foodtruck_id, price) values"

    orderList.forEach((val, index) => {
      foodtruckIdList.push(val.foodtruckId);
      user_order_sql = user_order_sql.concat(` (default, ${req.body.userId}, ${val.foodtruckId}, ${val.price})`);
      if (index > 0) {
        relation_valid_sql = relation_valid_sql.concat(` or user_id=${req.body.userId} and foodtruck_id=${val.foodtruckId}`);
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

    if (rel_required.length > 0) {
      let rel_create_sql = `insert into relation_user_foodtruck_tb(user_id, foodtruck_id) values`
      rel_required.forEach(val => {
        rel_create_sql = rel_create_sql.concat(` (${req.body.userId}, ${val})`);
      })
      // console.log('create relation: ' + rel_create_sql);
      await db.query(rel_create_sql)
    }


    console.log('order insert : ' + user_order_sql);
    db.query(user_order_sql).then(user_order_val => {
      let order_info_sql = "insert into order_tb(user_order_menu_id, menu_id, option_id, count) values"
      user_order_val.rows.forEach((val, index) => {
        orderList[index].id = val.id;
        orderList[index].orderedMenu.forEach((menuval) => {
          order_info_sql = order_info_sql.concat(` (${val.id}, ${menuval.menuId}, ${menuval.optionId}, ${menuval.amount})`);
        })

        data.orderList.push({ id: val.id, foodtruckId: orderList[index].foodtruckId });
      })

      // console.log('orderInfo insert: ', order_info_sql);

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