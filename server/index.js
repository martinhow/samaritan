const Koa = require('koa');
const cors = require('@koa/cors')
const router = require('./router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const port = 4000;


app.use(bodyParser())
  .use(cors())
  .use(router.routes());

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});