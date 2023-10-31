// import db from "../Database";
// import { Link } from "react-router-dom";

// import 'semantic-ui-css/semantic.min.css';
// import { Card } from 'semantic-ui-react';

// function Dashboard() {
//   const courses = db.courses;


//   const CardExampleHeaderCard = (courses) => (
//     <Card.Group>
//       {courses.map((course, index) => (
//         <Card>
//           <div style={{ height: '150px', backgroundColor: 'lightblue' }}></div>
//           <Card.Content>
//             <Card.Meta style={{ marginBottom: '10px' }}>{course.number}</Card.Meta>
//             <Card.Header>
//               <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
//                 {course.name}
//               </Link>
//             </Card.Header>
//             <Card.Description>
//               Start: {course.startDate} <br />
//               End: {course.endDate}
//             </Card.Description>
//           </Card.Content>
//         </Card>
//       ))}
//     </Card.Group>
//   )

//   return (
//     <div className="course">
//       <div style={{ margin: "20px" }}>
//         <h1>Dashboard</h1>
//         <hr />
//         <h2>Published Courses ({courses.length})</h2>
//       </div>
//       <div style={{ maxWidth: "1300px", marginLeft: "20px" }}>
//         {CardExampleHeaderCard(courses)}
//       </div>
//     </div>
//   );
// }

import { React } from "react";
import { Link } from "react-router-dom";

import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';

function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }) {
  return (
    <div className="course">
      <div style={{ margin: "20px" }}>
        <h1>Dashboard</h1>
        <hr />
        <h2>Published Courses ({courses.length})</h2>
      </div>
      <div style={{ maxWidth: "500px", marginLeft: "20px" }}>
        <div className="border mb-4 rounded-2">
          <input value={course.name} className="form-control my-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <input value={course.number} className="form-control my-2"
            onChange={(e) => setCourse({ ...course, number: e.target.value })} />
          <input value={course.startDate} className="form-control my-2" type="date"
            onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
          <input value={course.endDate} className="form-control my-2" type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
          <Button onClick={addNewCourse} color='green' className="m-2">Add</Button>
          <Button onClick={updateCourse} color='blue'>Update</Button>
        </div>
        <div className="list-group d-flex flex-wrap">
          {courses.map((course) => (
            <Link key={course._id}
              to={`/Kanbas/Courses/${course._id}`}
              className="list-group-item d-flex justify-content-between align-items-center">
              {course.name}
              <div className="d-flex justify-content-end">
                <Button onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }} color='orange'>Edit</Button>
                <Button onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }} color='red'>Delete</Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;