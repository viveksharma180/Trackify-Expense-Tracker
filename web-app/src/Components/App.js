import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import SignUp from './LandingPage/SignUp';
import Home from './HomePage/Home';
function App() {


  return (
    <div className="App AppExpenseContainerDiv">
    <Router> {/**Creting routes to navigate to different components */}
      <Routes>
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/home" element={<Home />} /> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;
