import React from 'react'
import { Bell } from 'lucide-react';
import humanbody from './assets/humanbody.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import './App.css'
import HealthCards from './HealthData';
import { organs } from './data'; // Import your data
import Activity from './assets/activity.png';

const AnatomyView = () => {






    return (
        <div className='Dashboard'>
            <div className="row mt-4">
                <div className="col-md-11">

                    <input className="form-control " type="search" placeholder="Search" aria-label="Search" />


                </div>

                <div className="col-md-1 ">
                    <FontAwesomeIcon icon={faBell} size="2x" style={{ marginRight: '20px', color: 'navy' }} />
                </div>

            </div>
            <div className="row mt-4">
                <div className="col-md-6"><h3>  Dashboard</h3></div>
                <div className="col-md-6">
                    <div className="text-end mt-3" >
                        <button className="btn btn-link text-decoration-none">
                            This week→
                        </button>
                    </div>

                </div>
            </div>

            <div id='bodyimg' className="row mt-4">
                <div className="col-md-8"  >
                    <img style={{ height: 320 }} src={humanbody} />
                </div>
                <div className="col-md-4 p-0" >


                    <div className="organs-grid d-flex gap-4 flex-wrap">
                        {organs.map((organ) => (
                            <div
                                key={organ.id} // Don't forget the key!
                                className="organ-card schedule-card p-4"
                                style={{ backgroundColor: organ.color }}
                            >
                                <div className="organ-icon"><h5> {organ.icon} {organ.name}</h5></div>

                                <small> {organ.description} </small>

                                {/* Progress Bar - Bootstrap Version */}
                                <div className="progress mt-3" style={{ height: "8px", backgroundColor: "rgba(0,0,0,0.1)" }}>
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{
                                            width: `${organ.health}%`, // Use organ.health if exists, else 75%

                                            backgroundColor: organ.progresscolor
                                        }}
                                        aria-valuenow={organ.health}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>


                            </div>
                        ))}
                    </div>

                    {/* <div className="organs-grid d-flex gap-4 flex-wrap">
                        {organs.map((organ) => (
                            <div className="organ-card schedule-card p-3" style={{ backgroundColor: organ.color }}>
                                <div className="organ-icon">{organ.icon}</div>
                                <h5>{organ.name}</h5>
                                <p>{organ.description}</p>
                            </div>
                        ))}
                    </div> */}













                    <div className="text-end mt-3" >
                        <button className="btn btn-link text-decoration-none">
                            Details →
                        </button>
                    </div>

                </div>

                <div className="row mt-4">
                    <div className="col-md-6" style={{ alignContent: 'center' }}><h3>Activity</h3>

                        <img src={Activity} alt="the image" style={{ height: 130, width: 550, margin: 'auto' }} />



                    </div>
                    <div className="col-md-6" style={{ float: 'right' }}> 3 appointments on this week </div>
                </div>

                <div className="row ms-3 mt-2 " style={{ marginTop: '80px' }}>

                    <div className="col-md-1">mon</div>
                    <div className="col-md-1 ms-4">tues</div>
                    <div className="col-md-1 ms-4">wed</div>
                    <div className="col-md-1 ms-4">thurs</div>
                    <div className="col-md-1 ms-4">fri</div>
                    <div className="col-md-1 ms-4">sat</div>

                    <div className="col-md-1 ms-4">sun </div>
                </div>
            </div >




        </div >
    )
}

export default AnatomyView
