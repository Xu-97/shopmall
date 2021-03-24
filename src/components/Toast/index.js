import Toast from "./Toast"

const toast  = {};
 
toast.install = function(Vue) {
   // console.log('指向函数');
   //document.body.appendChild(Toast.$el);
   //创建组件构造器
   const toastContrustor = Vue.extend(Toast);
   //2. new一个组件对象
   const obj = new toastContrustor();
   //3.将组件对象，手动挂载到某一个元素上面
   obj.$mount(document.createElement('div'));
   //
   document.body.appendChild(obj.$el);
   Vue.prototype.$toast =  obj; 
}


export default toast;