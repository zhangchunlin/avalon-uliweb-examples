define(["avalon"],function( av ) {
    //UI  控件的模板
   // 必须 在avalon.ui上注册一个函数，它有四个参数，最后一个是可选的，其他分别为容器元素，VM的ID名， vmodels
     av.ui["testui"] = function(element, id, vmodels, opts) {
         var $element = avalon(element);
         var defaults = {};
         var options = avalon.mix({}, defaults, opts, $element.data());
         var model = av.define(id, function(vm) {
             vm.name = "这是控件的默认内容"
             vm.xxx = "xxx"//添加其属性与方法
             vm.yyy = function(){}
             avalon.mix(vm, options)
         })
         //必须在nextTick的回调里插入新节点 与 进行扫描
         av.nextTick(function() {
             element.innerHTML = "<div>{% name %}</div>"
             //这里的格式是固定的
             av.scan(element, [model].concat(vmodels))
         })
         return model //这里必须返回VM对象，好让avalon.bindingHandlers.ui方法，将它放到avalon.vmodels中
     }
     return av //必须有返回值
 })