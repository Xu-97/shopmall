import {request} from  "./request";

export function getCategory(){
    return request({
        url:"/category"
    })
}

export function getCategoryRight(maitKey){
   return request({
        url:"/subcategory",
        params:{
            maitKey
        }
    })
}
// 分类页面数据http://152.136.185.210:7878/api/m5/subcategory?maitKey=3627
//分类页面进去详情页 数据
// 参考
// export function getCategory() {
//     return axios({
//       url: "/category"
//     }).catch(err => err);
//   }
  
//   export function getSubcategory(maitKey) {
//     return axios({
//       url: "/subcategory",
//       params: {
//         maitKey
//       }
//     }).catch(err => err);
//   }
  
//   export function getCategoryDetail(miniWallkey, type) {
//     return axios({
//       url: "/subcategory/detail",
//       params: {
//         miniWallkey,
//         type
//       }
//     }).catch(err => err);
//   }