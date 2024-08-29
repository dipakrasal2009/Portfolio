import geocoder
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route("/location")
def get_location():
    g = geocoder.ip('me')
    result_array = [g.latlng, g.address]  # Corrected variable name
    
    return jsonify(result_array)

if __name__ == "__main__":
    app.run()
