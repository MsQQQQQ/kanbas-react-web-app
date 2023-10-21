import db from "../../Database";
import { useParams } from "react-router-dom";
import GradeButtonGroup from "./GradeButtonGroup";
import { Table } from 'semantic-ui-react'

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <GradeButtonGroup />
      {/* <div className="table-responsive">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                  <td>{user.firstName} {user.lastName}</td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                    return (<td>{grade?.grade || ""}</td>);
                  })}
                </tr>);
            })}
          </tbody></table>
      </div> */}
      <div>
        <Table striped>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell>Student Name</Table.HeaderCell>
              {assignments.map((assignment) => (
                <Table.HeaderCell>
                  <div className="d-flex flex-column align-items-center">
                    <div>{assignment.title}</div>
                    <div>{assignment._id}</div>
                  </div>
                </Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <Table.Row textAlign='center'>
                  <Table.Cell>{user.firstName} {user.lastName}</Table.Cell>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                    return (<Table.Cell>{grade?.grade || ""}</Table.Cell>);
                  })}
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
export default Grades;