#!/usr/bin/env python3
"""This is the entry point of the API"""

from flask import Flask, jsonify, make_response
from api.v1.views import app_views
from flask_cors import CORS


app = Flask(__name__)
app.url_map.strict_slashes = False
cors = CORS(app, resources={r'/api/*': {'origins': '*'}})

app.register_blueprint(app_views, url_prefix='/api/v1/')
@app.errorhandler(404)
def not_found(e):
    """ handles not found call case"""
    return jsonify({"error": "Not found"})

if __name__ == '__main__':
    APP_HOST = '127.0.0.1'
    APP_PORT = '5000'
    app.run(host=APP_HOST, port=APP_PORT, threaded=True)
