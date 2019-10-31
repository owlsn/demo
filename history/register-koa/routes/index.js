const router = require('koa-router')();

router.get('/', async (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = `<h1>Index</h1>
        <form action="/sign" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
})

module.exports = router;