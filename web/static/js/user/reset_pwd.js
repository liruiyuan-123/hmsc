;
var mod_pwd_ops = {
    init:function(){
        this.eventBind()
    },
    eventBind:function(){
        $("#save").click(function(){
            console.log("reset_pwd")
            var btn_target = $(this)
            if (btn_target.hasClass("disablef")){
                alert("重置密码正在处理")
                return;
            }
            var old_password = $("#old_password").val();
            var new_password = $("#new_password").val();

            if (!old_password){
                alert("请输入原密码")
                return false;
            }
            if (!new_password || new_password.length < 6){
                alert("新密码错误")
                return false;
            }
            btn_target.addClass("disabled");
            $.ajax({
                url:common_ops.buildUrl("/user/reset-pwd"),
                type:"POST",
                data:{'old_password':old_password,'new_password':new_password},
                dataType:'json',
                success:function(resp){
                    btn_target.removeClass("disabled");
                    console.log(resp)
                    alert(resp.msg)
                },
                error:function(error){
                    console.log(error)
                }
            })
        })
    }
}
$(document).ready(function(){
    mod_pwd_ops.init()
})