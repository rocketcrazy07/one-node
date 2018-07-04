import * as Router from 'koa-router'
export const router = new Router();
// noinspection JSUnusedGlobalSymbols
export function GET(url: string) {
  // noinspection JSUnusedLocalSymbols
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
    router.get(target.prefix + url, target[propertyKey]);
  }
}
// noinspection JSUnusedGlobalSymbols
export function POST(url: string) {
  // noinspection JSUnusedLocalSymbols
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
    router.post(target.prefix + url, target[propertyKey]);
  }
}