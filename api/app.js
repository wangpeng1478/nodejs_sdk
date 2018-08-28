var tencentyoutuyun = require('..');
var conf = tencentyoutuyun.conf;
var youtu = tencentyoutuyun.youtu;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// 设置开发者和应用信息, 请填写你在开放平台
var appid = '10147318';
var secretId = 'AKIDTZZTo68Hzc8QSLBaWSaehgFkDa8ks778';
var secretKey = 'Xzd8UfkfQ5dDddcV7f2FF5x7jFakjbjr';
var userid = 'wangpp';

conf.setAppInfo(appid, secretId, secretKey, userid, 0)




//  POST 请求
app.post('/', urlencodedParser, function(req, res) {
	var body = req.body;
    youtu.idcardocr(body.image,body.card_type, function(data) {
        res.end(JSON.stringify(data));
    });
  	console.log(req.body)
})


var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

// //youtu.imageporn('a1.jpg', function(data){
// //    console.log("imagetag:" + JSON.stringify(data));
// //});
// youtu.imageporn('http://open.youtu.qq.com/app/img/experience/porn/image_porn01.jpg', function(data){
//     console.log("imagetag:" + JSON.stringify(data));
// });

// //youtu.idcardocr('a.jpg', 0, function(data){
// //    console.log("idcardocr:" + JSON.stringify(data));
// //});

// //youtu.namecardocr('a.jpg', false, function(data){
// //    console.log("namecardocr:" + JSON.stringify(data));
// //});

// youtu.imageterrorism('http://open.youtu.qq.com/app/img/experience/terror/img_terror01.jpg', function(data){
//     console.log("imageterrorism:" + JSON.stringify(data));
// });

// youtu.carclassify('http://open.youtu.qq.com/app/img/experience/car/car_01.jpg', function(data){
//     console.log("carclassify:" + JSON.stringify(data));
// });

// youtu.creditcardocr('http://open.youtu.qq.com/app/img/experience/char_general/ocr_card_1.jpg', function(data){
//     console.log("creditcardocr:" + JSON.stringify(data));
// });

// youtu.bizlicenseocr('http://open.youtu.qq.com/app/img/experience/char_general/ocr_yyzz_01.jpg', function(data){
//     console.log("bizlicenseocr:" + JSON.stringify(data));
// });

// youtu.plateocr('http://open.youtu.qq.com/app/img/experience/char_general/ocr_license_1.jpg', function(data){
//     console.log("plateocr:" + JSON.stringify(data));
// });

// youtu.multifaceidentify('http://open.youtu.qq.com/app/img/experience/face_img/face_01.jpg', 'test', [], 5, 40, function(data){
//     console.log("multifaceidentify:" + JSON.stringify(data));
// });