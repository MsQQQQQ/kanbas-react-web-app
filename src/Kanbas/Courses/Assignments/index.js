import React from "react";
import { useParams } from "react-router-dom";
import AssignmentButtonGroup from "./AssignmentButtonGroup";
import { Divider } from 'semantic-ui-react'
import AssignmentList from "./AssignmentList";
import db from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="mx-4">
      <div className="mt-3">
        <AssignmentButtonGroup />
      </div>
      <Divider />
      <AssignmentList
        assignmentList={courseAssignments}
      />
    </div>
  );
}
export default Assignments;