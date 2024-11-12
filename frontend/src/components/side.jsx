import React, { useState } from 'react';
import '../styles/Side.css';
import ExpandedView from './ExpandedView';
import "../styles/ExpandedView.css";

const Side = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded); // Toggle between the two views
  };

  return (
    <>
      <div className="outerlayer">
        <div className={`sidebar1 ${isExpanded ? "expanded" : ""}`}>
          <button className="toggle-button" onClick={handleToggle}>
            {isExpanded ? ">>" : "<<"}
          </button>

          {!isExpanded ? (
            <div className="section team-section">
              <p className='team-head'>Team</p>
              <div className="avatar">
                <img
                  src="https://img.freepik.com/premium-vector/character-portrait-people-business-different-face_710640-5837.jpg?w=740"
                  alt="Team 1"
                />
              </div>

              <div className="avatar">
                <img
                  src="https://img.freepik.com/premium-vector/character-portrait-people-business-different-face_710640-5842.jpg?w=740"
                  alt="Team 2"
                />
              </div>

              <div className="section individual-section">
                <p className='individualtext'>Individual</p>
                <div className="avatar-badge">
                  <img
                    src="https://img.freepik.com/premium-vector/collection-hand-drawn-profile-icons_1323905-5.jpg?w=740"
                    alt="Individual 1"
                  />
                  <span className="badge">1</span>
                </div>

                <div className="avatar-badge">
                  <img
                    src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?ga=GA1.1.220522105.1728886923&semt=ais_hybrid"
                    alt="Individual 2"
                  />
                  <span className="badge">1</span>
                </div>

                <div className="avatar-badge">
                  <img
                    src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436191.jpg?ga=GA1.1.220522105.1728886923&semt=ais_hybrid"
                    alt="Individual 3"
                  />
                  <span className="badge">3</span>
                </div>

                <div className="avatar-badge">
                  <img
                    src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174401.jpg?ga=GA1.1.220522105.1728886923&semt=ais_hybrid"
                    alt="Individual 4"
                  />
                  <span className="badge">7</span>
                </div>

                <div className="avatar-badge">
                  <img
                    src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg?ga=GA1.1.220522105.1728886923&semt=ais_hybrid"
                    alt="Individual 5"
                  />
                </div>

                <div className="avatar-badge">
                  <img
                    src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg?ga=GA1.1.220522105.1728886923&semt=ais_hybrid"
                    alt="Individual 6"
                  />
                </div>
              </div>
            </div>
          ) : (
            <ExpandedView onCollapse={handleToggle} />
          )}
        </div>
      </div>
    </>
  );
};

export default Side;










// import React, { useState } from 'react';
// import '../styles/Side.css'; // Import CSS for styling

// const Side = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleToggle = () => {
//     setIsExpanded(!isExpanded); // Toggle between the two views
//   };

//   return (
//     <div className="container">
//       <div className={`sidebar2 ${isExpanded ? 'expanded' : ''}`}>
//         <button className="toggle-btn" onClick={handleToggle}>
//           {isExpanded ? '>>' : '<<'} {/* Show opposite arrow based on state */}
//         </button>
        
//         {!isExpanded ? (
//           <div className="collapsed-view">
//             {/* Collapsed View */}
//             <div className="section team-section">
        
//           <p >Team</p>
//            <div className="avatar">
//              <img src="https://img.freepik.com/premium-vector/character-portrait-people-business-different-face_710640-5837.jpg?w=740" alt="Team 1" />
//            </div>
//            <div className="avatar">
//              <img src="https://img.freepik.com/premium-vector/character-portrait-people-business-different-face_710640-5842.jpg?w=740" alt="Team 2" />
//            </div>
//          </div>

//          <div className="section individual-section">
//            <p>Individual</p>
//            <div className="avatar-badge">
//              <img src="https://img.freepik.com/premium-vector/collection-hand-drawn-profile-icons_1323905-5.jpg?w=740" alt="Individual 1" />
//              <span className="badge">1</span>
//            </div>
//            <div className="avatar-badge">
//              <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?ga=GA1.1.220522105.1728886923&semt=ais_hybrid" alt="Individual 2" />
//              <span className="badge">1</span>
//            </div>
//            <div className="avatar-badge">
//              <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436191.jpg?ga=GA1.1.220522105.1728886923&semt=ais_hybrid" alt="Individual 3" />
//              <span className="badge">3</span>
//           </div>
//            <div className="avatar">
//              <img src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174401.jpg?ga=GA1.1.220522105.1728886923&semt=ais_hybrid" alt="Individual 4" />
//            </div>
//            <div className="avatar">
//              <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg?ga=GA1.1.220522105.1728886923&semt=ais_hybrid" alt="Individual 5" />
//            </div>
//            <div className="avatar">
//              <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg?ga=GA1.1.220522105.1728886923&semt=ais_hybrid" alt="Individual 6" />
//            </div>
//          </div>
//        </div>
//         ) : (
//           <div className="expanded-view">
//             {/* Expanded View */}
//             <div className="header">
//               <p>Team</p>
//               <div className="team-section">
//                 <div className="team-card">
//                   <p>Team Creative</p>
//                   <span>10 Members</span>
//                   <span>10:36am</span>
//                 </div>
//                 <div className="team-card">
//                   <p>Team Design</p>
//                   <span>26 Members</span>
//                   <span>10:36am</span>
//                 </div>
//               </div>
//               <p>Individual</p>
//               <div className="individual-section">
//                 <div className="individual-card">
//                   <p>Ravikumar</p>
//                   <span>Project Time: 11:26am</span>
//                 </div>
//                 <div className="individual-card">
//                   <p>Suresh</p>
//                   <span>11:10am</span>
//                 </div>
//                 <div className="chat-section">
//                   <p>Are you done?</p>
//                   <p>Not yet. Let you know once I’m done.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Side;

