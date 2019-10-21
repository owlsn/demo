const router = require('koa-router')();
const fs = require('fs');
const path = require('path');
const svgCaptcha = require('svg-captcha');

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
    console.log(code)
    console.log(ctx.session.code)
    var ret = {
        code: '',
        info: '',
        redirect: ''
    }
    if (code && code.toLowerCase() === ctx.session.code) {
        if (user.name === name && user.password === password) {
            ret.code = 1
            ret.info = 'login success'
            ret.redirect = redirect
        }
        else {
            ret.code = -1
            ret.info = 'name and password are not matched'
        }
    }
    else {
        ret.code = -1
        ret.info = 'verify code is wrong'
    }
    ctx.response.body = ret;
})

router.post('/verify_code', async (ctx, next) => {
    const cap = svgCaptcha.create({
        size: 4, // 验证码长度
        width: 160,
        height: 60,
        fontSize: 50,
        ignoreChars: '0oO1ilI', // 验证码字符中排除 0o1i
        noise: 2, // 干扰线条的数量
        color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
        background: '#eee' // 验证码图片背景颜色
    })
    let img = cap.data // 验证码
    var text = cap.text.toLowerCase() // 验证码字符，忽略大小写
    ctx.session.code = text
    ctx.response.body = { svg: `${img}` }
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