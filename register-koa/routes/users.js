const router = require('koa-router')();
const fs = require('fs');
const path = require('path');

router.prefix('/users');

router.get('/ajax', async (ctx, next) => {
    ctx.response.type = 'application/json';
    ctx.response.body = { status: 200, text: 'success', data: {} };
});

router.post('/sign', async (ctx, next) => {
    var name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`sign with name:${name},password:${password}`);
    //数据库对比
    if (true) {
        ctx.response.body = 'sign success';
    }
    else {

    }
});

router.get('/get_json', async (ctx, next) => {
    ctx.response.type = 'application/json';
    ctx.body = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..') + '/public/file/list.json'));
});

router.post('/list', async (ctx, next) => {
    ctx.response.type = 'application/json';
    ctx.body = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..') + '/public/file/list.json'));
});

router.post('/info', async (ctx, next) => {
    ctx.response.type = 'application/json';
    ctx.body = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..') + '/public/file/user.json'));
});

router.post('/signup', async (ctx, next) => {
    ctx.response.type = 'application/json';
    var ret = {
        status : -1,
        info : ''
    }
    var data = ctx.request.body
    console.log(data)
    var phone = data.phone,
        password = data.password,
        rePassword = data.rePassword,
        email = data.email;
    if(password !== rePassword){
        ret.info = 'password is not match rePassword'
    }
    else{
        ret.status = 200
        ret.info = 'success'
    }
    ctx.body = ret
    // ctx.body = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..') + '/public/file/user.json'));
})

module.exports = router;