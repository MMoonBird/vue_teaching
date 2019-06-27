/*
1,引入Vue,创建一个Vue实例,将这个js暴露出去
2,在要广播的地方引入这个实例
3,通过VueEmit.$emit('名称',数据);
4,通过VueEmit.$on('名称',function(data){
});
接收广播的数据
*/
import Vue from 'vue'

var VueEvent = new Vue();

export default VueEvent;
