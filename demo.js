// const http = require("http");
// const url = require("url");
// const mysql  = require('mysql');  
// const qs=require('querystring');


/**
 * @description: node连接数据库练习
 * @param {type} 
 * @return: 
 */
// let connection = mysql.createConnection({     
//     host     : '47.100.167.231',       
//     user     : 'root',              
//     password : '9872014',       
//     port: '3306',                   
//     database: 'phh' 
// }); 
 
// try {
//     connection.connect();
//  } catch (error) {
//     console.log("数据库连接错误")
//  } 

// let obj;
// let  sql = 'SELECT team FROM comment WHERE score = 10';
//   //查
// connection.query(sql,function (err, result) {
//   if(err){
//     console.log('[SELECT ERROR] - ',err.message);
//     console.log(obj);
//     return;
//   } 
//   obj = JSON.stringify(result);
// });
// connection.end();

// http.createServer(function(req,res){
//         res.writeHead(200, {
//         'Content-Type': 'application/json'
//     });
//     res.end(obj);
// }).listen(3001)

/**
 * @description: 事件监听练习
 * @param {type} 
 * @return: 
 */

// let EventEmiter = require("events").EventEmitter;

// let Event = new EventEmiter();

// Event.on("some",()=>{
//   console.log("something happened!")
// });

// Event.on("some",()=>{
//   console.log("this is happened!")
// })

// setInterval(()=>{
//   Event.emit('some');
//   Event.emit("click")
// },1000)

// console.log(Event.listeners('some'));
// console.log(Event.listenerCount('some'))

// Event.removeAllListeners()

// /**
//  * @description: Buffer练习
//  * @param {type} 
//  * @return: 
//  */

// let buf = new Buffer(10);

// /**
//  * @description: Buffer.write函数
//  * @param 参数说明：写入的字符串，起始点位置，写入的长度，编码形式
//  * @return: 
//  */
// let A = buf.write('this is a',7,7,"ascii")
// /**
//  * @description: buffer.tostring
//  * @param 参数说明：编码形式，起始点，结束位置
//  * @return: 
//  */
// let B = buf.toString('ascii',1)
// console.log('aaaaaa',A);
// console.log('aaaaaa',buf.length);

// let fs = require('fs');

// let readStream = fs.createReadStream('./index.txt');
// let writeStream = fs.createWriteStream('./a.txt');

// readStream.setEncoding('UTF-8');

// readStream.on('data',()=> console.log('on data',new Date()));
// readStream.on('end',()=> console.log('it is end',new Date()));

// readStream.pipe(writeStream);

// console.log(writeStream)



























