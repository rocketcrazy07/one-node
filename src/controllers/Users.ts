import {Context} from "koa";
//import UserModel from '../models/User'
import {GET} from '../lib/routes-decorator'

export class Users{
  static prefix='/users';
  @GET('/test')
  static async setModel(ctx: Context){
    console.log("IT WORKS");
    ctx.body = "IT WORKS";
  }

}