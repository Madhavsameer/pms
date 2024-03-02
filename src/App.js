import React from 'react';




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './coordinator';
import CompanyDetails from './pages/CompanyDetails';
import Notification from './pages/Notification';
import Studentdatabase from './pages/StudentDatabase';
import GenerateReport from './pages/GenerateReport';





const App = () => {
    return (

        <Router>
        

        <Routes>
          
          <Route exact path="/cord" element={<Layout/>} />
          <Route exact path="/companydetails" element={<CompanyDetails/>} />
          <Route exact path="/notification" element={<Notification/>} />
          <Route exact path="/studentdatabase" element={<Studentdatabase/>} />
          <Route exact path="/generatereport" element={<GenerateReport/>} />
          
          
          
          
          
        </Routes>
        </Router>
    );
};

export default App;
