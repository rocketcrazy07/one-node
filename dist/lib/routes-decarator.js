"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
exports.router = new Router();
function GET(url) {
    return function (target, propertyKey, descriptor) {
        exports.router.get(target.prefix + url, target[propertyKey]);
    };
}
exports.GET = GET;
function POST(url) {
    return function (target, propertyKey, descriptor) {
        exports.router.post(target.prefix + url, target[propertyKey]);
    };
}
exports.POST = POST;
//# sourceMappingURL=routes-decarator.js.map