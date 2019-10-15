const router = require('koa-router')();

router.prefix('/users');

router.get('/ajax', async (ctx, next) => {
    ctx.response.type = 'application/json';
    ctx.response.body = {status : 200, text : 'success', data : {}};
});

router.post('/sign', async (ctx, next) => {
    var name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`sign with name:${name},password:${password}`);
    //数据库对比
    if(true){
        ctx.response.body = 'sign success';
    }
    else{
        
    }
});

module.exports = router;