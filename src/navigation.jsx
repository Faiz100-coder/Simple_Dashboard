import { useState } from 'react';
import './App.css';
import { LayoutGrid, CalendarDays, Settings } from 'lucide-react';

function Navigation() {
    return (
        <>
            <div className="container-fluid navigation" id='sidebar'>
                {/* <div className='row'> */}
                <div className="col-md-2 navigation">
                    {/* Healthcare Title */}
                    <div className="sidebar-header p-5">
                        <h4 className="text-primary">Healthcare</h4>
                    </div>

                    {/* General Section */}
                    <div className="sidebar-section">
                        <h6 className="sidebar-section-title px-3 py-2 text-muted">General</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link disable" >  <LayoutGrid size={17} /> Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disable" >History</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disable" > <CalendarDays size={17} /> Calendar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disable" >Appointments</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disable" >Statistics</a>
                            </li>
                        </ul>
                    </div>

                    {/* Tools Section */}
                    <div className="sidebar-section">
                        <h6 className="sidebar-section-title px-3 py-2 text-muted">Tools</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Chat</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Support</a>
                            </li>

                            <li className="nav-item " style={{ marginTop: 180 }} >
                                <a className="nav-link"><Settings size={17} />setting</a>
                            </li>
                        </ul>

                    </div>
                </div>


                {/* </div> */}
            </div >
        </>
    );
}

export default Navigation;