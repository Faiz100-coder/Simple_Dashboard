export const scheduleData = {
    month: "October 2021",
    daysOfWeek: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    dates: [25, 26, 27, 28, 29, 30, 31],
    timeSlots: [
        ["10:00", "08:00", "12:00", "10:00", "—", "12:00", "09:00"],
        ["11:00", "09:00", "—", "11:00", "14:00", "14:00", "10:00"],
        ["12:00", "10:00", "13:00", "—", "16:00", "15:00", "11:00"]
    ],
    currentAppointments: [
        {
            title: "Dentist",
            time: "09:00-11:00",
            doctor: "Dr. Cameron Williamson",
            icon: "Stethoscope"
        },
        {
            title: "Physiotherapy Appointment",
            time: "11:00-12:00",
            doctor: "Dr. Kevin Djones",
            icon: "Stethoscope"
        }
    ],
    upcomingSchedule: [
        {
            day: "On Thursday",
            appointments: [
                {
                    title: "Health checkup complete",
                    time: "11:00 AM",
                    icon: "Dot"
                },
                {
                    title: "Ophthalmologist",
                    time: "14:00 PM",
                    icon: "Eye"
                }
            ]
        },
        {
            day: "On Saturday",
            appointments: [
                {
                    title: "Cardiologist",
                    time: "12:00 AM",
                    icon: "HeartPulse"
                },
                {
                    title: "Neurologist",
                    time: "16:00 PM",
                    icon: "Brain"
                }
            ]
        }
    ]
};