import random
from pprint import pprint

from flask import Flask, request, render_template, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    """Show index page."""
    
    return render_template("index.html")


@app.route('/api/profile', methods=['POST'])
def profile():
    """Return results from profile form."""

    profile_pack = {}
    profile_pack['name'] = request.json.get('name')
    profile_pack['age'] = request.json.get('age')
    profile_pack['occupation'] = request.json.get('occupation')
    profile_pack['salary'] = request.json.get('salary')
    profile_pack['education'] = request.json.get('education')
    profile_pack['state'] = request.json.get('state')
    profile_pack['city'] = request.json.get('city')
    profile_pack['garden'] = request.json.get('garden')
    profile_pack['tv'] = request.json.get('tv')

    pprint(profile_pack)

    return jsonify(profile_pack)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
