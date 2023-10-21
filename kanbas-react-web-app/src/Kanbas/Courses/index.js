import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import Grid from '@mui/material/Grid';
import { FiMenu } from "react-icons/fi";
import Divider from '@mui/material/Divider';

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const page = pathname.split("/").pop();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
      <Grid
        container
        direction="row"
        alignItems="baseline"
      >
        <FiMenu style={{ marginLeft: 10, marginRight: 10 }} />
        <h4>{course.name} &gt; {page}</h4>
      </Grid>
      <Divider />
      <Grid container >
        <Grid item sx={{ display: { xs: "none", sm: "block" } }}>
          <CourseNavigation />
        </Grid>
        <Grid item >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </Grid>
      </Grid>
    </div >
  );
}

export default Courses;
