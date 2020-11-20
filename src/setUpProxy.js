const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports=function(app){
    app.use('/api', createProxyMiddleware({
         target: 'https://m.maoyan.com', 
         changeOrigin: true ,
         pathRewrite:{
            "^/api":''
         }
        }));
app.listen(3000);
}