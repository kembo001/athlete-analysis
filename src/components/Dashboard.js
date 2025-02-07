import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from your backend or decode from token
    // Example:
    // const token = localStorage.getItem('token');
    // if (token) {
    //   const userData = decodeToken(token); // or fetch('/api/auth/me');
    //   setUser(userData);
    // }
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="dashboard-container">
      <div className="profile-section">
        <img src={user.profilePic || '/default-avatar.png'} alt="Profile" />
        <h2>{user.name}</h2>
        <p>Sport: {user.sport}</p>
        <p>Overall: {user.overall}</p>
      </div>

      <div className="attributes-section">
        <h3>Your Attributes</h3>
        <ul>
          <li>Quiet Eye Duration: {user.quietEye}</li>
          <li>Motor Learning: {user.motorLearning}</li>
          <li>Mental Resilience: {user.mentalResilience}</li>
          {/* ... */}
        </ul>
      </div>
      
      <div className="compare-section">
        <h3>Compare Your Stats</h3>
        <p>Select an athlete to compare your stats with them.</p>
        {/* Could be a dropdown or list of athletes */}
      </div>
      
      <div className="routine-section">
        <button>Copy This Athlete’s Routine</button>
        <button>AI-Generate My Routine</button>
        {/* On click, you’d open a modal or navigate to a form 
            where you input your weight, schedule, budget, etc. */}
      </div>
    </div>
  );
}

export default Dashboard;
