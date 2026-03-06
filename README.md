# Smart Activity Planner 🌤️

A Flask-based web application that recommends suitable activities based on **real-time weather conditions** using live weather API data.

---

## 📌 Project Overview

Smart Activity Planner helps users decide what activities are best suited for current weather conditions.
The application fetches live weather data for any city and analyzes parameters such as temperature, humidity, wind speed, and weather conditions to suggest indoor or outdoor activities.

The system also provides a dynamic user interface with weather-based backgrounds and activity recommendations.

---

## 🚀 Features

* 🌦️ Real-time weather data using OpenWeather API
* 📍 Search weather by city name
* 📊 Displays temperature, humidity, wind speed, and weather condition
* 🎯 Smart activity recommendation system
* 🎥 Dynamic weather background animations
* 🕒 Hourly weather forecast display
* 💻 Interactive and responsive UI

---

## 🛠️ Technologies Used

**Frontend**

* HTML5
* CSS3
* JavaScript
* Tailwind CSS

**Backend**

* Python
* Flask Framework

**API**

* OpenWeather API

---

## 📂 Project Structure

```
smart-activity-planner
│
├── app.py
├── requirements.txt
│
├── templates
│   └── index.html
│
├── static
│   ├── style.css
│   ├── script.js
│   └── videos
│        ├── sunny.mp4
│        ├── cloudy.mp4
│        ├── rainy.mp4
│        ├── snowy.mp4
│        └── thunderstorm.mp4
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```
git clone https://github.com/srujalogale1319/smart-activity-planner.git
```

2. Navigate to the project folder

```
cd smart-activity-planner
```

3. Create virtual environment

```
python -m venv venv
```

4. Activate virtual environment

Mac/Linux:

```
source venv/bin/activate
```

Windows:

```
venv\Scripts\activate
```

5. Install dependencies

```
pip install -r requirements.txt
```

6. Run the application

```
python app.py
```

7. Open in browser

```
http://127.0.0.1:5000
```

---

## 🔑 API Used

Weather data is fetched from:

OpenWeather API

You need to generate an API key and add it in `app.py`.

---

## 📊 How the System Works

1. User enters a city name.
2. Frontend sends request to Flask backend.
3. Flask calls the OpenWeather API.
4. Weather data is received in JSON format.
5. Backend processes the data.
6. Suitable activity is recommended.
7. UI updates dynamically with weather information and background animation.

---

## 🔮 Future Enhancements

* AI-based activity recommendation
* Automatic location detection using GPS
* Mobile application version
* Personalized activity suggestions
* Weather alerts and notifications

---

## 👨‍💻 Author

**Srujal Ogale**

GitHub:
https://github.com/srujalogale1319

---

## 📄 License

This project is open-source and available for educational purposes.
# smart-activity-planner
