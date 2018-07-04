import {Ref, prop, Typegoose} from 'typegoose'
import {User} from "./User";

export class Client extends Typegoose{
  @prop()
  name: string;
  @prop({ref: User})
  users: [Ref<User>]

}