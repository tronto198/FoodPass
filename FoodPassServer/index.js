//express모듈 사용하기 위해 require 함수로 불러옴
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const port=443
const path = require('path');
const fs = require('fs');
const HTTPS = require('https');;

var compression=require('compression')
var accountRouter=require('./routes/account')
var foodtruckRouter=require('./routes/foodtruck')
var infoDataRouter=require('./routes/infoData')
var listDataRouter=require('./routes/listData')
var mainRouter=require('./routes/main')
var orderRouter=require('./routes/order')

//라우팅 객체 만듦.
const app=express();
app.use(express.static(__dirname+ '/images'));
app.use(cors());
app.use(bodyParser.json({extended: true}))
app.use(compression())


app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});


app.use('/', mainRouter)
app.use('/account', accountRouter)//손님, 사장 계정 관련 정보
app.use('/foodtruck', foodtruckRouter)//푸드트럭 정보 insert, update, delete
app.use('/infoData', infoDataRouter)//없어도 될듯?
app.use('/listData', listDataRouter)//푸드트럭 리스트, 메뉴 리스트, 옵션 리스트
app.use('/order', orderRouter)//주문정보


app.use((req,res, next)=>{
  res.status(404).send('[404 error] sorry cant find that!')
})

app.use((err, req,res,next)=>{
  console.error(err.stack)
  res.status(500).send('[500 error] Something broke!')
})

//서버 열기
try {
  const option = {
    ca: fs.readFileSync('/etc/letsencrypt/live/foodpass.tk/fullchain.pem'),
    key: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/foodpass.tk/privkey.pem'), 'utf8').toString(),
    cert: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/foodpass.tk/cert.pem'), 'utf8').toString(),
  };

  HTTPS.createServer(option, app).listen(port, () => {
    console.log(`[HTTPS] Soda Server is started on port ${port}`);
  });
} catch (error) {
  console.error('[HTTPS] HTTPS 오류가 발생하였습니다. HTTPS 서버는 실행되지 않습니다.');
  console.error(error);
}

