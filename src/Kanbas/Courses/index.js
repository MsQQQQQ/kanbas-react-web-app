import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";


import { Icon, Breadcrumb } from 'semantic-ui-react'
import "./index.css"

function Courses() {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});

  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;

  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const { pathname } = useLocation();
  const page = pathname.split("/").pop();

  const sections = [
    { key: course.name, content: course.name, link: true },
    { key: page, content: page, link: true },
  ]
  return (
    <div className="d-flex flex-column">
      <div className="d-none d-md-block courseName">
        <Icon name='bars' size="large" className="iconBar" />
        <Breadcrumb icon='right angle' size="large" sections={sections} className="bread" />
      </div>
      <div className="d-flex d-md-none justify-content-between bg-black text-white text-center py-2 align-items-center">
        <Icon name='bars' className="ms-3" />
        <div>
          <div>{course.number}-{course.name}</div>
          <div>{page}</div>
        </div>
        <Icon name='eye' className="me-3" />
      </div>
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-grow-1 mx-3">
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
        </div>
      </div>
    </div>
  );
}

export default Courses;