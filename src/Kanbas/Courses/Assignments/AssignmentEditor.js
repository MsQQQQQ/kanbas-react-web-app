import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button, Input } from 'semantic-ui-react'
import db from "../../Database";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="mt-3">
      <div>
        <h4>Assignment Name</h4>
        <Input fluid size='massive' icon='search' placeholder={assignment.title} />
        <textarea className="my-2" style={{ width: "400px", height: "30px" }} placeholder="Discription" />
      </div>
      <div>
        <label className="mx-4">Points</label>
        <Input placeholder="100" />
      </div>
      <div className="d-flex">
        <label className="mx-4">Assign</label>
        <div className="border mb-4 rounded-2" style={{ width: "300px" }}>
          <label className="mx-4">Due</label>
          <input className="form-control my-2" type="date" />
          <label className="mx-4">Available from</label>
          <input className="form-control my-2" type="date" />
          <label className="mx-4">Until</label>
          <input className="form-control my-2" type="date" />
        </div>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <Button as={Link} to={`/Kanbas/Courses/${courseId}/Assignments`}>
          Cancel
        </Button>
        <Button color="red" onClick={handleSave} >
          Save
        </Button>
      </div>
    </div>
  );
}


export default AssignmentEditor;