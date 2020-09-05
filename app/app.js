// ライブラリ読み込み
var express    = require('express');
var app        = express();

//body-parserの設定
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

 // ポート番号を指定
var port = process.env.PORT || 8080;

//ルーティングの設定
var router = require('./router/');
app.use('/api/', router);

// app.get('/api/',function(req,res){
//     res.json({
//         message:"Hello,world"
//     });
// });

//サーバ起動
app.listen(port);
console.log('listen on port ' + port);