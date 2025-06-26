// // import React from 'react';
// // import {
// //     Calendar as CalendarIcon,
// //     CheckCircle,
// //     HeartPulse,
// //     Brain
// // } from 'lucide-react';
// // import './upcomming.css'

// // const UpcomingSchedule = () => {
// //     const scheduleItems = [
// //         {
// //             day: 'On Thursday',
// //             appointments: [
// //                 {
// //                     title: 'Health checkup complete',
// //                     time: '11:00 AM',
// //                     icon: <CheckCircle className="text-success" />
// //                 }
// //             ]
// //         },
// //         {
// //             day: 'On Saturday',
// //             appointments: [
// //                 {
// //                     title: 'Cardiologist',
// //                     time: '12:00 AM',
// //                     icon: <HeartPulse className="text-danger" />
// //                 },
// //                 {
// //                     title: 'Neurologist',
// //                     time: '16:00 PM',
// //                     icon: <Brain className="text-primary" />
// //                 }
// //             ]
// //         }
// //     ];

// //     return (
// //         <div className="card border-0 shadow-sm">
// //             <div className="card-header bg-white border-0">
// //                 <div className="d-flex align-items-center">
// //                     <CalendarIcon className="text-primary me-2" />
// //                     <h5 className="mb-0 fw-semibold">The Upcoming Schedule</h5>
// //                 </div>
// //             </div>
// //             <div className="card-body">
// //                 {scheduleItems.map((dayGroup, index) => (
// //                     <div key={index} className="mb-3">
// //                         <h6 className="fw-semibold text-muted mb-2">{dayGroup.day}</h6>
// //                         <div className="ps-3">
// //                             {dayGroup.appointments.map((appointment, idx) => (
// //                                 <div key={idx} className="d-flex align-items-center mb-2">
// //                                     <div className="me-2">
// //                                         {appointment.icon}
// //                                     </div>
// //                                     <div className="flex-grow-1">
// //                                         <span className="d-block">{appointment.title}</span>
// //                                         <small className="text-muted">{appointment.time}</small>
// //                                     </div>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default UpcomingSchedule;



// import React from 'react';
// import styled from 'styled-components';
// // import './Appontmentcard.module.css'

// // Styled component for the appointment card
// const AppointmentCard = styled.div`
//   background-color: white;
//   border-radius: 12px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   padding: 20px;
//   margin-bottom: 16px;
//   max-width: 300px;
//   font-family: Arial, sans-serif;
// `;

// const AppointmentTitle = styled.div`
//   font-weight: bold;
//   font-size: 18px;
//   margin-bottom: 8px;
// `;

// const AppointmentTime = styled.div`
//   color: #666;
//   font-size: 16px;
//   margin-bottom: 8px;
// `;

// const AppointmentDoctor = styled.div`
//   font-size: 16px;
//   color: #333;
// `;

// const AppointmentList = () => {
//     const appointments = [
//         {
//             title: "Dentist",
//             time: "09:00-11:00",
//             doctor: "Dr. Cameron Williamson"
//         },
//         {
//             title: "Physiotherapy Appointment",
//             time: "11:00-12:00",
//             doctor: "Dr. Kevin Djones"
//         }
//     ];

//     return (
//         <div>
//             {appointments.map((appointment, index) => (
//                 <AppointmentCard key={index}>
//                     <AppointmentTitle>{appointment.title}</AppointmentTitle>
//                     <AppointmentTime>{appointment.time}</AppointmentTime>
//                     <AppointmentDoctor>{appointment.doctor}</AppointmentDoctor>
//                 </AppointmentCard>
//             ))}
//         </div>
//     );
// };

// export default AppointmentList;



import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./ScheduleSection.css";

const ScheduleSection = () => {
    return (
        <div className="container py-1 ms-4">
            <div className="upcoming-schedule">
                <h4 className="mb-4">The Upcoming Schedule</h4>

                <div className="mb-4">
                    <p className="text-muted fw-bold">On Thursday</p>
                    <div className="d-flex gap-4 flex-wrap">
                        <div className="schedule-card p-3 rounded">
                            <h6 className="mb-1">Health checkup complete <span role="img">💉</span></h6>
                            <p className="mb-0">11:00 AM</p>
                        </div>
                        <div className="schedule-card p-3 rounded">
                            <h6 className="mb-1">Ophthalmologist <span role="img">👁️</span></h6>
                            <p className="mb-0">14:00 PM</p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-muted fw-bold">On Saturday</p>
                    <div className="d-flex gap-4 flex-wrap">
                        <div className="schedule-card p-3 rounded">
                            <h6 className="mb-1">Cardiologist <span role="img">❤️</span></h6>
                            <p className="mb-0">12:00 AM</p>
                        </div>
                        <div className="schedule-card p-3 rounded">
                            <h6 className="mb-1">Neurologist <span role="img">🧑‍⚕️</span></h6>
                            <p className="mb-0">16:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleSection;
