import * as Koa from 'koa';
const app = new Koa();
import {router} from './lib/routes-decorator'
require('./controllers/Users');
import * as Mongoose from 'mongoose';
Mongoose.connect('mongodb://localhost/test');


app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');

//Sample set user password is hashed before saving to DB
/*
router.get('/setUser', async (ctx)=> {
  let user = new UserModel({username:'test2',password:'test1'});
  await user.save();
  ctx.body = "Saved"
});

router.get('/', async (ctx) => {
  ctx.body = '<h1>Hello World and others!!!</h1>';
});
//Sample to compare password using
router.get('/compare', async (ctx)=> {
  let user = await UserModel.findOne({username:'test2'});
  let pass: string="test1";
  let result = await user.comparePassword(pass);
  console.log(result);
  ctx.body = "Result: " + result;
});
*/