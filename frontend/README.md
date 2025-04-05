# Portfolio Builder App

A full-stack web application built using **ReactJS (Frontend)** and **Django (Backend)** that allows users to submit their personal portfolio data including profile, skills, and projects. Once submitted, the data is displayed in a neatly formatted portfolio view.

---

## Features

- Users can enter personal details like name, role, email, phone, location, and a profile image.
- Users can add multiple skills and projects dynamically.
- Users can upload images for their profile and projects.
- After submitting the form, the user sees a live preview of their complete portfolio.
- Frontend built using **React**.
- Backend API powered by **Django REST Framework**.

---

## Demo Flow

1. **User fills out the portfolio form**  
   - Enters name, role, about section, contact details  
   - Uploads profile image  
   - Adds multiple skills and levels  
   - Adds multiple projects with title, description, link, and image

2. **Form submission**  
   - On form submit, data is sent to Django backend (or locally stored during testing)  
   - A success message is logged and the portfolio view replaces the form

3. **Portfolio View Displayed**  
   - Shows all submitted information in a structured, visually appealing layout

---

## Technologies Used

### Frontend
- ReactJS
- Axios
- SCSS/CSS Modules

### Backend
- Django
- Django REST Framework

---

## Getting Started

### Backend Setup (Django)


# Clone the repo
git clone https://github.com/your-username/portfolio-builder.git
cd portfolio-builder/backend

# Create virtual environment
python -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Run the server
python manage.py runserver

cd ../frontend

# Install dependencies
npm install

# Run the app
npm start

project-root/
│
├── backend/
│   └── Django project files
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PortfolioForm.jsx
│   │   │   └── PortfolioView.jsx
│   │   └── styles/
│   │       └── PortfolioForm.scss
│   └── public/
│
└── README.md
