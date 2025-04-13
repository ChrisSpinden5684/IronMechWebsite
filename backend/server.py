import os
import requests
from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

CLIENT_ID = os.getenv("CLIENT_ID")
CLIENT_SECRET = os.getenv("CLIENT_SECRET")

def get_spotify_token():
    url = 'https://accounts.spotify.com/api/token'
    headers = {
        'Authorization': 'Basic ' + (f"{CLIENT_ID}:{CLIENT_SECRET}").encode('ascii').decode('ascii')
    }
    data = {
        'grant_type': 'client_credentials'
    }

    response = requests.post(url, data=data, auth=(CLIENT_ID, CLIENT_SECRET))
    return response.json().get('access_token')

@app.route('/api/spotify/artist/<name>')
def search_artist(name):
    token = get_spotify_token()
    if not token:
        return jsonify({"error": "Could not get token"}), 500

    headers = {
        'Authorization': f'Bearer {token}'
    }
    params = {
        'q': name,
        'type': 'artist',
        'limit': 1
    }

    r = requests.get('https://api.spotify.com/v1/search', headers=headers, params=params)
    return jsonify(r.json())

if __name__ == '__main__':
    app.run(debug=True, port=5000)