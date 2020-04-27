;

var  user_edit_ops = {
    init:function(){
        this.eventBind()
    },
    eventBind:function(){
        // 获取保存按钮
        $('.user_edit_wrap .save').click(function(){
            var btn_target = $(this)
            if (btn_target.hasClass("disablef")){
                alert("正在处理保存")
                return;
            }
            var nickname_value = $(".user_edit_wrap input[name=nickname]").val();
            var email_value = $(".user_edit_wrap input[name=email]").val();
            console.log('nickname_value')
            console.log('email')

            if (!nickname_value || nickname_value.length < 2){
                alert("用户名不规范")
                return false
            }
            if (!email_value || email_value.length < 2){
                alert("邮箱不规范")
                return false
            }

            btn_target.addClass("disabled");

            $.ajax({
                url:common_ops.buildUrl("/user/edit"),
                type:"POST",
                data:{'nickname':nickname_value,'email':email_value},
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
    user_edit_ops.init()
})