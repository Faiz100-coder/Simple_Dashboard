import React from 'react'
import AnatomyView from './AnatomyView'
import Calendar from './calendar'

const Dashboard = () => {
    return (
        <>
            <div className="row">

                <div className='col-md-6'>
                    <AnatomyView />
                </div>
                <div className='col-md-6'>
                    <Calendar />
                </div>
            </div>
        </>

    )
}

export default Dashboard
