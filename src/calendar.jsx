import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faCircleUser, faLeftLong, faRightLong, } from '@fortawesome/free-solid-svg-icons';
import UpcommingSchedule from './UpcommingSchedule'
import ScheduleSection from './DateCalender'
import './App.css'
const Calendar = () => {
    return (
        <>
            <h6 style={{ float: 'right', marginTop: '10px' }}>
                <FontAwesomeIcon icon={faCircleUser} size="3x" style={{ marginRight: '20px', color: '#74C0FC' }} />
                <FontAwesomeIcon icon={faSquarePlus} size="3x" style={{ marginRight: '20px', color: 'navy' }} />
            </h6>
            <div className="row mt-4 " style={{ marginTop: '80px' }}>
                <div className="col-md-6 " style={{ marginTop: '75px' }}>  <h5> October 2021</h5></div>

                <div className="col-md-6 float-end" style={{ marginTop: '70px', float: 'end', fontSize: '25px', color: 'navy' }}>
                    <FontAwesomeIcon style={{ marginLeft: '20px', float: 'right' }} icon={faRightLong} />
                    <FontAwesomeIcon className='float-end' icon={faLeftLong} />
                </div>

            </div>


            <div className="row">
                <div className="col-md-12"> <ScheduleSection /> </div>
            </div>


            <div>
                <UpcommingSchedule />
            </div>
        </>
    );
};

export default Calendar;