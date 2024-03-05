from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('base.html')

@app.route('/music')
def music_info():
    return render_template('music.html')

@app.route('/gym')
def gym_info():
    return render_template('working_out.html')

@app.route('/family_time')
def family_time_info():
    return render_template('family_time.html')

if __name__ == '__main__':
    app.run(debug=True)