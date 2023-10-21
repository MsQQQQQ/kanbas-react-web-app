import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { AiOutlineInbox } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { CiMonitor } from "react-icons/ci";
import { BiLogoCreativeCommons } from "react-icons/bi";
import { BiHelpCircle } from "react-icons/bi";

import "./index.css";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon account-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon nav-icon" />,
    Courses: <FaBook className="wd-icon nav-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon nav-icon" />,
    Inbox: <AiOutlineInbox className="wd-icon nav-icon" />,
    History: <BsClockHistory className="wd-icon nav-icon" />,
    Studio: <CiMonitor className="wd-icon nav-icon" />,
    Commons: <BiLogoCreativeCommons className="wd-icon nav-icon" />,
    Help: <BiHelpCircle className="wd-icon nav-icon" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 100, height: '100vh' }}>
      <div className="navbar-image">
        <img src="../../images/neu-1.jpg" />
      </div>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
