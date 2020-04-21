from application import app

@app.route('/index')

def index():
    return "hello"