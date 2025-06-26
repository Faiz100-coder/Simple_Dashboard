// import { useState } from 'react'
// // import viteLogo from '/vite.svg'
// import './App.css'

// function App() {


//   return (
//     <>



//       <div className="container-fluid">
//         <div className='row'>
//           <div className="col-md-2" >


//             <ul className="nav flex-column">
//               <li className="nav-item">
//                 <a className="nav-link disabled" aria-current="page" title="General" >Dashboard</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link disabled" >History</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link disabled" >Calander</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link disabled" aria-disabled="true">Appointment</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link disabled" aria-disabled="true">Statistics</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link disabled" aria-disabled="true">Appointment</a>
//               </li>
//             </ul>
//           </div>
//           <div className="col-md-10" style={{ background: 'lavenderblush' }}>.col-sm-3</div>
//         </div>
//       </div>






//     </>
//   )
// }

// export default App


import { useState } from 'react';
import Navigation from './navigation';
import Dashboard from './dashboard';

// import maincontent from './maincontent';

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className='row'>
          {/* <div className='row'> */}
          <div className="col-md-2" style={{ background: '#f8f9fa', minHeight: '100vh' }}>
            <Navigation />
          </div>
          <div className="col-md-10" style={{ background: '#f8f9fa', minHeight: '100vh' }}>
            <Dashboard />

          </div>
        </div>
      </div>

    </>
  );
}

export default App;