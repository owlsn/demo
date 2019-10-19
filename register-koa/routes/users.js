const router = require('koa-router')();
const fs = require('fs');
const path = require('path');

router.prefix('/users');

// router.get('/ajax', async (ctx, next) => {
//     ctx.response.type = 'application/json';
//     ctx.response.body = { status: 200, text: 'success', data: {} };
// });

router.post('*', async (ctx, next) => {
    // ctx.response.type = 'application/json';
    await next()
})

router.post('/login', async (ctx, next) => {
    var name = ctx.request.body.name || '',
        password = ctx.request.body.password || '',
        redirect = ctx.request.body.from || '',
        code = ctx.request.body.code || '';
    console.log(`login with name:${name},password:${password}`);
    //数据库对比
    var user = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..') + '/public/file/user.json'))
    console.log(user.name)
    console.log(user.password)
    var ret = {
        code : '',
        info : '',
        redirect : ''
    }
    if (user.name === name && user.password === password) {
        ret.code = 1
        ret.info = 'login success'
        ret.redirect = redirect
    }
    else {
        ret.code = -1
        ret.info = 'name and password are not matched'
    }
    ctx.response.body = ret;
})

router.post('/verify_code', async(ctx, next) => {
    ctx.response.body = 'url'
})

router.post('/signup', async (ctx, next) => {
    var ret = {
        status: -1,
        info: ''
    }
    var data = ctx.request.body
    console.log(data)
    var phone = data.phone,
        password = data.password,
        rePassword = data.rePassword,
        email = data.email;
    if (password !== rePassword) {
        ret.info = 'password is not match rePassword'
    }
    else {
        ret.status = 200
        ret.info = 'success'
    }
    ctx.body = ret
    // ctx.body = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..') + '/public/file/user.json'));
})

router.post('/info', async (ctx, next) => {
    console.log(path.resolve(__dirname, '..') + '/public/file/user.json')
    ctx.body = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..') + '/public/file/user.json'));
});

module.exports = router;