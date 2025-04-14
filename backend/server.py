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
TBA_AUTH_KEY = os.getenv("TBA_AUTH_KEY")

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
    return jsonify(parse_artist_data(r.json()))

@app.route('/api/frc/team/<team_num>')
def search_frc_team(team_num):
    url = f'https://www.thebluealliance.com/api/v3/team/frc{team_num}'
    headers = {
        'X-TBA-Auth-Key': TBA_AUTH_KEY
    }

    r = requests.get(url, headers=headers)
    return jsonify(r.json())

def parse_artist_data(data):
    try:
        artist = data['artists']['items'][0]

        temp = {
            "id": artist['id'],
            "name": artist['name'],
            "popularity": artist['popularity'],
            "followers": artist['followers']['total'],
            "genres": artist['genres'],
            "image_url": artist['images'][0]['url'] if artist['images'] else None,
            "spotify_url": artist['external_urls']['spotify']
        }
    except Exception as e:
        print(F"Unexcepted Error: {e}, {type(e)=}")
        return data
    else:
        return temp

    
if __name__ == '__main__':
    app.run(debug=True, port=5000)