from googlesearch import search
from flask import Flask ,jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route("/google/<query>")
def google(query):

    # Define the query
    #query = input("enter the data : ")
    
    # Perform the search and get the top 5 results
    results = search(query, num_results=5)
    
    result_array = []
    # Print the results
    for idx, result in enumerate(results, start=1):
        result_array.append(f"{idx}. {result}")

    return jsonify(result_array)
app.run()
