"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();
const User_1 = require("./models/User");
const Mongoose = require("mongoose");
Mongoose.connect('mongodb://localhost/test');
// noinspection UnnecessaryLocalVariableJS
const db = Mongoose.connection;
let userModel = new User_1.User().getModelForClass(User_1.User, { existingConnection: db, schemaOptions: { timestamps: true } });
router.get('/', async (ctx) => {
    ctx.body = '<h1>Hello World and others!!!</h1>';
});
app.use(router.routes());
//Sample set user password is hashed before saving to DB
router.get('/setUser', async (ctx) => {
    let user = new userModel({ username: 'test2', password: 'test1' });
    await user.save();
    ctx.body = "Saved";
});
//Sample to compare password using
router.get('/compare', async (ctx) => {
    let user = await userModel.findOne({ username: 'test2' });
    let pass = "test1";
    let result = await user.comparePassword(pass);
    console.log(result);
    ctx.body = "Result: " + result;
});
app.listen(3000);
console.log('Server running on port 3000');
//# sourceMappingURL=app.js.map