import React from "react";
import { useParams } from "react-router-dom";
import AssignmentButtonGroup from "./AssignmentButtonGroup";
import { Divider } from 'semantic-ui-react'
import AssignmentList from "./AssignmentList";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
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