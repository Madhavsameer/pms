import React from 'react';
import './cordinator.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const Layout = () => {
  return (
    <div>
    <div>
      <h1 id='mess'> Co-Ordinator</h1>
      <div className="container" id='cordcont'>
  <div className="row" id='row1'>
    <div className="col"><div class="card">
  <img src="https://www.freecodecamp.org/news/content/images/2023/07/Depth-First-Search--1-.png" class="card-img-top" alt=""/>
  <div class="card-body">
    <h5 class="card-title">Add the notification</h5>
    
    
    <Link to="/notification" class="btn btn-primary">Add Notification</Link>
  </div>
</div> </div>
    <div className="col"><div class="card">
  <img src="https://www.slideteam.net/media/catalog/product/cache/1280x720/e/n/engineering_company_profile_powerpoint_presentation_slides_slide01.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">View the company details</h5>
    
    
    <Link to="/companydetails" class="btn btn-primary">company Details</Link>
  </div>
</div></div>
   
  </div>
  <div className="row" id='row2'>
    <div className="col"><div class="card" >
  <img src="https://visme.co/blog/wp-content/uploads/2022/10/How-to-Write-an-Effective-Monthly-Report-Thumbnail.jpg"class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Generate report & send to Admin</h5>
    
    
    <Link to="/generatereport" class="btn btn-primary">Generate Report</Link>
  </div>
</div> </div>
    <div className="col"><div class="card">
  <img src="https://www.hashmicro.com/blog/wp-content/uploads/2023/04/student-management-system.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Manage & Filter the student database</h5>
    
    
    <Link to="studentdatabase" class="btn btn-primary">Student Database</Link>
  </div>
</div></div>
    
  </div>
</div>

    </div>
    
    </div>
  );
}

export default Layout;
