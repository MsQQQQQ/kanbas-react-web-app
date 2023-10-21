import db from "../Database";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import './index.css'

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="course">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {courses.map((course, index) => (
            <Grid
              item
              xs={12}    // extra-small and below: one card per row
              sm={6}     // small: two cards in a row
              md={4}     // medium: three cards in a row
              lg={3}     // large: four cards in a row
            >
              <Card sx={{ maxWidth: 345 }}>
                <Box sx={{ bgcolor: 'crimson', height: 150, width: '100%' }} />
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {course.number}
                  </Typography>
                  <Typography variant="h5" component="div">
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                      {course.name}
                    </Link>
                  </Typography>
                  <Typography variant="body2">
                    {course.startDate}
                  </Typography>
                  <Typography variant="body2">
                    {course.endDate}
                  </Typography>

                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Dashboard;
