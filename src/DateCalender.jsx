import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./ScheduleSection.css";

const ScheduleSection = () => {
    return (
        <div className="container py-3 ms-4 ">
            <div className="calendar d-flex justify-content-center gap-4 mb-5">
                {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day, i) => (
                    <div
                        key={day}
                        className={`day-column text-center p-2 rounded ${i === 1 ? "active-day" : ""
                            }`}
                    >
                        <strong>{day}</strong>
                        <div className="text-muted">{25 + i}</div>
                        <div className="times mt-2">
                            {["08:00", "09:00", "10:00", "12:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"].map((time, j) => (
                                (i === 1 && [0, 1, 2].includes(j)) ||
                                    (i === 2 && [2, 3, 4].includes(j)) ||
                                    (i === 3 && [1].includes(j)) ||
                                    (i === 4 && [2, 3].includes(j)) ||
                                    (i === 5 && [2, 3, 4].includes(j)) ||
                                    (i === 6 && [1, 2].includes(j)) ? (
                                    <div
                                        key={time}
                                        className={`time-slot mt-2 ${i === 1 && time === "09:00" ? "selected" : ""
                                            }`}
                                    >
                                        {time}
                                    </div>
                                ) : null
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="row gap-4 justify-content-center">
                {/* <div className="col-md-4 p-3 rounded text-white dentist-card">
                    <h5 className="mb-2">Dentist <span role="img">🦷</span></h5>
                    <p className="mb-1">09:00–11:00</p>
                    <p className="mb-0">Dr. Cameron Williamson</p>
                </div> */}

                <div className="d-flex gap-4 flex-wrap">


                    <div className="schedule-card p-3 rounded ">
                        <h6 className="mb-1">Dentist<span role="img">🦷</span></h6>
                        <p className="mb-1">09:00–11:00</p>
                        <p className="mb-0">Dr. Cameron Williamson</p>

                    </div>
                    <div className="schedule-card p-3 rounded">
                        <h6 className="mb-1">Physiotheriphy Appointment <span role="img">💪</span></h6>
                        <p className="mb-1">11:00–12:00</p>
                        <p className="mb-0">Dr. Kevin Djones</p>
                    </div>
                </div>

                {/* <div className="col-md-4 p-3 rounded bg-light physiotherapy-card">
                    <h5 className="mb-2">Physiotherapy Appointment <span role="img">💪</span></h5>
                    <p className="mb-1">11:00–12:00</p>
                    <p className="mb-0">Dr. Kevin Djones</p>
                </div> */}
            </div>
        </div>
    );
};

export default ScheduleSection;
