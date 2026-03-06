from flask import Flask, render_template, request, jsonify
import requests
from datetime import datetime

app = Flask(__name__)

API_KEY = "5338bb43523be5e58b010b81ef5c09d9"
BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast"


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/weather", methods=["POST"])
def weather():
    try:
        data = request.get_json()
        city = data.get("city")

        curr_res = requests.get(BASE_URL, params={
            "q": city,
            "appid": API_KEY,
            "units": "metric"
        })

        fore_res = requests.get(FORECAST_URL, params={
            "q": city,
            "appid": API_KEY,
            "units": "metric"
        })

        if curr_res.status_code != 200:
            return jsonify({"error": "City station not responding. Check spelling."}), 400

        c = curr_res.json()
        f = fore_res.json()

        hourly = []
        for item in f.get("list", [])[:8]:
            hourly.append({
                "time": datetime.fromtimestamp(item["dt"]).strftime("%H:%M"),
                "temp": round(item["main"]["temp"]),
                "icon": item["weather"][0]["icon"]
            })

        real_temp = c["main"]["temp"]
        feels_like = c["main"]["feels_like"]
        condition = c["weather"][0]["main"]

        # Activity recommendation logic
        if real_temp < 15 or "Rain" in condition:
            rec, cat = "Movie Night", "Indoor"
        elif real_temp > 28:
            rec, cat = "Swimming", "Outdoor"
        else:
            rec, cat = "Outdoor Cycling", "Outdoor"

        return jsonify({
            "city": c["name"],
            "temp": round(real_temp),
            "feels_like": round(feels_like),
            "condition": condition,
            "humidity": c["main"]["humidity"],
            "wind": round(c["wind"]["speed"] * 3.6, 1),
            "pressure": c["main"]["pressure"],
            "hourly": hourly,
            "recommended": rec,
            "category": cat
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)