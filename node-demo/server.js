/*
1，node是事件驱动，这是它快的原因（）


*/

/********************************************/
//引入Node自带的http/url模块
var http  = require('http')
var url = require('url')

//createServer返回一个对象，该对象具有listen方法

//post请求一般比较“重”，这里应该采用非阻塞的方式处理，阻塞方式会导致用户的操作阻塞
//为使过程非阻塞，node将post拆分成很多小的数据块（大段内容的时候data事件会触发多次），通过特定事件将这些小数据块传递给回调函数
//其中data事件：表示新的小数据块到达了；end事件：表示所有的数据都已接收完毕

function server(route,handle){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		var postData = '';
		console.log('request for'+ pathname + 'recevied')
		request.setEncoding("utf8")  //设置接收数据的编码格式
		request.addListener('data',function(postDataChunk){
			postData += postDataChunk;
			console.log('recevied POST data chunk"'+ postDataChunk +'"!!')
		})
		request.addListener('end',function(){
			route(handle, pathname, response, postData);
		})

	}

	http.createServer(onRequest).listen(8888)
}
//node中exports用于创建模块
//exports是module.exports的一个引用，exports = module.exports = {}，require引用后返回给调用者的是module.ecports而不是exports
exports.server = server 