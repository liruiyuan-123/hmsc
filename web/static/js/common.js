;
var common_ops = {
    init:function(){
        console.log('common.js初始化')
        this.eventBind()
    },
    eventBind:function(){
        console.log('common.js初始化')
    },
    buildUrl:function(path,params){
        var url = ""+path
        return url;
    }
}

$(document).ready(function(){
    common_ops.init();
})