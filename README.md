

# 🎬 UniShowTime

UniShowTime is a Django-based **event management and ticketing platform** designed for universities.  
It allows students to explore and attend events, suggest new ideas, manage tickets with QR codes, and revisit event memories in a modern, responsive UI.  

---

## ✨ Features

- 🎟️ **Event Creation & Management** – Organizers can add, edit, and manage university events.  
- 👥 **Ticket Booking System** – Students can reserve tickets with unique QR codes for event check-ins.  
- 💡 **Event Suggestions** – Students can suggest new events; admins can review, approve, and turn them into real events.  
- 📷 **Event Memories** – Attendees can view photos and memories from past events.  
- 🔑 **QR Code Tickets** – Secure, scannable QR codes for entry validation.  
- 🎨 **Modern UI** – TailwindCSS-powered responsive design.  
- ⚡ **Optimized Performance** – WhiteNoise + Django Compressor for production-ready static files.  
- 🛠️ **Developer Friendly** – Includes Debug Toolbar, Crispy Forms, and Tailwind integration for rapid development.  

---

## 🛠️ Tech Stack

- **Backend**: Django 4.2+  
- **Frontend**: TailwindCSS + Django Templates  
- **Database**: SQLite (default), supports PostgreSQL/MySQL  
- **Deployment**: Gunicorn + WhiteNoise  
- **Authentication**: Django’s built-in `User` model  

---

## 📦 Requirements

Install dependencies with:

```bash
pip install -r requirements.txt
````

**Key dependencies:**

* Django >= 4.2
* Pillow
* qrcode
* python-dotenv
* django-tailwind
* django-browser-reload
* django-crispy-forms
* crispy-tailwind
* whitenoise
* gunicorn
* django-compressor
* django-libsass
* django-debug-toolbar

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/UniShowTime.git
cd UniShowTime
```

### 2️⃣ Create Virtual Environment

```bash
python -m venv venv
source venv/bin/activate   # On Linux/Mac
venv\Scripts\activate      # On Windows
```

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

### 4️⃣ Setup Environment Variables

Create a `.env` file in the root folder:

```
SECRET_KEY=your_django_secret_key
DEBUG=True
ALLOWED_HOSTS=127.0.0.1,localhost
```

### 5️⃣ Run Migrations

```bash
python manage.py migrate
```

### 6️⃣ Create Superuser (for admin access)

```bash
python manage.py createsuperuser
```

### 7️⃣ Start Development Server

```bash
python manage.py runserver
```

Now visit 👉 `http://127.0.0.1:8000/`

---

## 💡 Event Suggestions

The **Event Suggestions** feature lets students submit event ideas and admins review them.

### 🔹 For Students:

1. Login with your account.
2. Navigate to **Suggest Event** (`/events/suggest/`).
3. Fill in the title & description of your idea.
4. Submit it — your suggestion will be visible to admins.

### 🔹 For Admins:

1. Login with your **admin account**.
2. Visit **Suggestions Dashboard** (`/events/suggestions/`).
3. Review all suggestions.
4. Approve and convert a suggestion into an official event.

---

## 🎨 Tailwind CSS Setup

If you want to customize styles:

```bash
python manage.py tailwind install
python manage.py tailwind start
```
---

## 📂 Project Structure

```
UniShowTime/
│── manage.py
│── requirements.txt
│── .env.example
│── apps/
│   ├── events/          # Event management
│   ├── tickets/         # Ticket booking & QR generation
│   ├── users/           # Authentication
│   ├── suggestions/     # Event suggestion feature
│── templates/           # Base & custom templates
│── static/              # Tailwind, CSS, JS
```


---

## 👨‍💻 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to add.

---

## 🙌 Acknowledgements

* Django & TailwindCSS
* University community testers 🎓

```

