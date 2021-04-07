import {request} from "./request"

export function getDetail(iid){
   return request({
     url:'/detail',
     params:{
         iid
     }
   })
}

export function getRecommned(){
  return request({
     url: '/recommend'
  })
}
// 将数据进行整合到对象中进行重新分发
// 商品详情信息
export class Goods{
  constructor(columns,itemInfo,services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.nowPrice = itemInfo.highNowPrice
    // this.realPrice = itemInfo.realPrice;
    this.services = services;
  }
} 
// 店铺详情信息
export class Shop{
  constructor(shopInfo){
    this.services = shopInfo.services;
    this.cFans = shopInfo.cFans; //粉丝
    this.cGoods = shopInfo.cGoods; // 宝贝数目
    this.cSells = shopInfo.cSells; //销量
    this.name = shopInfo.name; //店铺名称
    this.shopLogo = shopInfo.shopLogo; //店铺logo

    this.score = shopInfo.score; //用户满意以及评分
  }
}
// 详情页面商品参数
export class Params{
  constructor(info,rule){
    this.key = rule.key;
    this.set = info.set;
    this.tables = rule.tables;
    this.disclaimer = rule.disclaimer;
  }
}