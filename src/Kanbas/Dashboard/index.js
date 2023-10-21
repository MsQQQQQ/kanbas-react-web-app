import db from "../Database";
import { Link } from "react-router-dom";

import 'semantic-ui-css/semantic.min.css';
import { Card } from 'semantic-ui-react';

function Dashboard() {
  const courses = db.courses;


  const CardExampleHeaderCard = (courses) => (
    <Card.Group>
      {courses.map((course, index) => (
        <Card>
          <div style={{ height: '150px', backgroundColor: 'lightblue' }}></div>
          <Card.Content>
            <Card.Meta style={{ marginBottom: '10px' }}>{course.number}</Card.Meta>
            <Card.Header>
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                {course.name}
              </Link>
            </Card.Header>
            <Card.Description>
              Start: {course.startDate} <br />
              End: {course.endDate}
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  )

  return (
    <div className="course">
      <div style={{ margin: "20px" }}>
        <h1>Dashboard</h1>
        <hr />
        <h2>Published Courses ({courses.length})</h2>
      </div>
      <div style={{ maxWidth: "1300px", marginLeft: "20px" }}>
        {CardExampleHeaderCard(courses)}
      </div>
    </div>
  );
}
export default Dashboard;