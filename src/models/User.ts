import {instanceMethod,InstanceType, pre, prop, Typegoose} from 'typegoose'
import * as bcrypt from 'bcrypt';
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
  @instanceMethod
  async comparePassword(this: InstanceType<User>, pw: string){
    return await bcrypt.compare(pw, this.password)
  };
}