# ⚙️ CPD Backend (BE)

The **backend service** for the CPD Application, powering **Patients, Doctors, Clinics, Labs, and Admins**.  
It provides secure APIs for **authentication, appointments, medical records, AI integration, and system management**.

---

## ✨ Features (Backend Scope)

- 🔐 **Authentication & Authorization**  
  - Role-based access: Patient, Doctor, Clinic, Admin, Lab  
  - JWT-based authentication with token expiry  
  - MFA/OTP support *(optional)*  

- 📅 **Appointments Management**  
  - Book, reschedule, cancel appointments  
  - Priority & emergency bookings  
  - Clinic & doctor slot management  

- 🧑‍⚕️ **Medical Records**  
  - Prescriptions, diagnoses, treatment notes  
  - Medication & appointment history  
  - Secure file sharing (PDF/Reports)  

- 🤖 **AI Assistant Integration**  
  - Symptom checker with demographics  
  - AI-generated suggestions for doctors  
  - Consent & audit logging  

- 🛡️ **System Administration**  
  - User & role management  
  - System monitoring & activity logs  
  - Compliance reports (GDPR/HIPAA)  

---

## 🛠️ Tech Stack

- **Runtime:** Node.js (TypeScript)  
- **Framework:** Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Authentication:** JWT, bcrypt, MFA/OTP *(optional)*  
- **API Docs:** Swagger / OpenAPI  
- **DevOps:** Docker, GitHub Actions/Jenkins, AWS (EC2, S3, RDS, CloudFront)  
- **Monitoring:** Grafana, Sentry, New Relic  

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-org/cpd-backend.git
cd cpd-backend
. Install dependencies
npm install

3. Setup environment variables

Create a .env file in the root directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development


(Optional) Add other keys like EMAIL_SERVICE, AWS_ACCESS_KEY, AI_API_KEY if required.

4. Run the server
npm run dev


Runs the server in watch mode with nodemon.

5. Build for production
npm run build
npm start

🧪 Testing

Run unit and integration tests:

npm test

🐳 Docker Setup

Build and run the app using Docker:

docker build -t cpd-backend .
docker run -p 5000:5000 --env-file .env cpd-backend

📖 Documentation

📘 API Documentation
 – Swagger UI (after running the app)

📄 Product Details
 – Full feature breakdown

🛡️ Security & Compliance
 – HIPAA/GDPR policies

📄 License

This project is licensed under the MIT License.