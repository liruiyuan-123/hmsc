from flask import Blueprint,render_template

router_user = Blueprint('user_page',__name__)

# 注册
@router_user.route("/register")
def register():
    return '注册'
# 登录
@router_user.route("/login")
def login():
    return render_template("user/login.html")

@router_user.route("/logout")
def logout():
    return '登出'

# 编辑
@router_user.route("/edit")
def edit():
    return '编辑'

@router_user.route("/reset_pwd")
def reset_pwd():
    return '重置密码'

