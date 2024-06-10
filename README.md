Project utilizes Express.js for backend, React for frontend and MongoDB Atlas to deliver a website for restaurant clients. The goal of the project was to turn such website into containers using Docker Compose.


Thanks to *docker-compose.yml* and *Dockerfiles* project is turned into 3 containers, one for each directory: admin, backend, frontend.

# Setup

1. Obtain Stripe secret key and update it in **./backend/.env**
2. Obtain MongoDB Atlas URL and update it in  **./backend/config/db.js**
3. Make sure you have installed Docker Desktop and have Internet connection
4. Head to the project main directory
5. Run *docker-compose up --build*
