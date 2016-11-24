//这里是路由，负责把请求路径分配到请求处理函数
function route(handle,pathname,response,postData){
	console.log('about to route a request for' + pathname)
	if(typeof handle[pathname] == 'function'){
		return handle[pathname](response,postData);
	}else{
		console.log('no request handler found for' + pathname)
		response.writeHead(404,{"Content-type":"text/plain"});
		response.write('404 Not found');
		response.end()
	}

}
exports.route = route