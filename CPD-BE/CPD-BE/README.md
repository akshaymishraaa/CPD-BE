# Doctor-Patient and Clinical Management System

## Overview
The Doctor-Patient and Clinical Management System is a comprehensive application designed to streamline the interactions between doctors, patients, and clinics. This system facilitates appointment scheduling, patient management, and doctor availability tracking, ensuring efficient healthcare delivery.

## Features
- **Doctor Management**: Register and manage doctor profiles, including availability and prescriptions.
- **Patient Management**: Register patients, manage their profiles, and maintain medical history.
- **Appointment Scheduling**: Create, reschedule, and cancel appointments with ease.
- **Clinic Management**: Register clinics, assign doctors, and manage time slots.

## Project Structure
```
CPD-BE
├── src
│   ├── app.ts
│   ├── controllers
│   │   ├── doctorController.ts
│   │   ├── patientController.ts
│   │   ├── appointmentController.ts
│   │   └── clinicController.ts
│   ├── models
│   │   ├── doctor.ts
│   │   ├── patient.ts
│   │   ├── appointment.ts
│   │   └── clinic.ts
│   ├── routes
│   │   ├── doctorRoutes.ts
│   │   ├── patientRoutes.ts
│   │   ├── appointmentRoutes.ts
│   │   └── clinicRoutes.ts
│   ├── services
│   │   ├── doctorService.ts
│   │   ├── patientService.ts
│   │   ├── appointmentService.ts
│   │   └── clinicService.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd CPD-BE
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Configure the database connection in `src/app.ts`.
5. Start the application:
   ```
   npm start
   ```

## API Endpoints
- **Doctors**
  - `POST /doctors/register`: Register a new doctor.
  - `PUT /doctors/:id`: Update doctor profile.
  - `GET /doctors/:id/availability`: Get doctor availability.
  - `POST /doctors/:id/prescription`: Add a prescription for a patient.

- **Patients**
  - `POST /patients/register`: Register a new patient.
  - `POST /patients/login`: Patient login.
  - `PUT /patients/:id`: Update patient profile.
  - `POST /patients/:id/appointments`: Book an appointment.
  - `GET /patients/:id/medical-history`: View medical history.

- **Appointments**
  - `POST /appointments`: Create a new appointment.
  - `PUT /appointments/:id/reschedule`: Reschedule an appointment.
  - `DELETE /appointments/:id`: Cancel an appointment.
  - `GET /appointments/:id`: Get appointment details.

- **Clinics**
  - `POST /clinics/register`: Register a new clinic.
  - `POST /clinics/:id/assign-doctor`: Assign a doctor to a clinic.
  - `PUT /clinics/:id/manage-time-slots`: Manage clinic time slots.
  - `GET /clinics/:id/patient-history`: Access patient history.

## Technologies Used
- Node.js
- Express.js
- TypeScript
- MongoDB (or any other database of choice)

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.