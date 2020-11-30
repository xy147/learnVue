import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

// let defaultiCity = '上海'
// try {
//     if(localStorage.city){
//         defaultiCity = localStorage.city
//     }
// }catch(e){}
// export default new Vuex.Store({
//     state:{
//         city:defaultiCity
//     },
//     mutations:{
//         changeCity (state,city) {
//             state.city = city
//             try{
//                 localStorage.city = city
//             } catch (e) {}
//         }
//     }
// })



//把上面部分单独拆分出去
export default new Vuex.Store({
    state,
    mutations:mutations
})