import React from 'react';

const HealthCards = () => {
    const healthData = [
        {
            title: 'Lungs',
            date: '26 Okt 2021',
            icon: '🫁' // or use an actual icon component
        },
        {
            title: 'Teeth',
            date: '26 Okt 2021',
            icon: '🦷'
        },
        {
            title: 'Bone',
            date: '26 Okt 2021',
            icon: '🦴'
        }
    ];

    return (
        <div className="container">
            <div className="row g-3">
                {healthData.map((item, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card rounded-4 border-0 shadow-sm h-100">
                            <div className="card-body text-center p-4">
                                <div className="display-4 mb-3">{item.icon}</div>
                                <h5 className="card-title fw-bold">{item.title}</h5>
                                <p className="text-muted">Date: {item.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-end mt-3">
                <button className="btn btn-link text-decoration-none">
                    Details →
                </button>
            </div>
        </div>
    );
};

export default HealthCards;