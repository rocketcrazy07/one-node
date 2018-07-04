import {instanceMethod, InstanceType, pre, prop, Ref, Typegoose} from 'typegoose'
import * as bcrypt from 'bcrypt';
import {Client} from './Client';

const saltgenRounds = 10;

@pre<User>('save', async function(next) {
  if(this.isModified('password')){
    // noinspection JSPotentiallyInvalidUsageOfClassThis
    this.password = await bcrypt.hash(this.password, saltgenRounds);
  }


  return next();
})


export class User extends Typegoose{
  @prop()
  password: string;
  @prop({index:true, required: true, unique:true})
  username: string;
  @prop()
  first_name: string;
  @prop()
  last_name: string;
  @prop()
  email: string;
  @prop({ref:Client})
  client: Ref<Client>;
  @instanceMethod
  async comparePassword(this: InstanceType<User>, pw: string){
    return await bcrypt.compare(pw, this.password)
  };
}
let UserModel = new User().getModelForClass(User,{schemaOptions:{timestamps:true}});

export default UserModel;