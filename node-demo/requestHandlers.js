//这里是请求处理函数
//对于阻塞的过程，这里调用node的child_process方法来创建一个进程

var exec = require("child_process").exec;
//引入node查询字符串模块
var querystring = require('querystring')
//引入node文件处理模块
var fs = require('fs')

function start(response,postData){
	console.log('request handle:start')
	 var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
	response.writeHead(200,{"Content-Type":"text/html"})
	response.write(body);
	response.end()

	 // exec("find /",
	 // 	//延迟和最大数据量
	 //    { timeout: 10000, maxBuffer: 20000*1024 },
	 //    function (error, stdout, stderr) {
	 //      response.writeHead(200, {"Content-Type": "text/plain"});
	 //      response.write(stdout);
	 //      response.end();
	 //    });
}

function upload(response,postData){
	console.log('request handle:upload')
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("get you've sent:"+ querystring.parse(postData).text)
	response.end();
}
function show(response,postData){
	console.log('request handle:show');
	fs.readFile('./tmp/test.jpg','binary',function(err,file){
		if(err){
			response.writeHead(500,{"Content-Type":"text/plain"})
			response.write(err+'\n');
			response.end()
		}else{
			response.writeHead(200,{"Content-Type":"image/jpg"});
			response.write(file,'binary')
			response.end()
		}
	})
}
exports.start = start;
exports.upload = upload;
exports.show = show;