"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("typegoose");
const bcrypt = require("bcrypt");
const Client_1 = require("./Client");
const saltgenRounds = 10;
let User = class User extends typegoose_1.Typegoose {
    async comparePassword(pw) {
        return await bcrypt.compare(pw, this.password);
    }
    ;
};
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typegoose_1.prop({ index: true, required: true, unique: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typegoose_1.prop({ ref: Client_1.Client }),
    __metadata("design:type", Object)
], User.prototype, "client", void 0);
__decorate([
    typegoose_1.instanceMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], User.prototype, "comparePassword", null);
User = __decorate([
    typegoose_1.pre('save', async function (next) {
        if (this.isModified('password')) {
            // noinspection JSPotentiallyInvalidUsageOfClassThis
            this.password = await bcrypt.hash(this.password, saltgenRounds);
        }
        return next();
    })
], User);
exports.User = User;
let UserModel = new User().getModelForClass(User, { schemaOptions: { timestamps: true } });
exports.default = UserModel;
//# sourceMappingURL=User.js.map