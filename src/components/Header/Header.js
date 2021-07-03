import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import EventIcon from "@material-ui/icons/Event";
import LeaderBoardIcon from "@material-ui/icons/EmojiEvents";
import PersonSharpIcon from "@material-ui/icons/PersonSharp";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <Navbar className="navbar" variant="dark">
        <Link to="/">
          <Navbar.Brand className="brand">
            <HomeIcon fontSize="large" />
            <p>E-Learning Portal</p>
          </Navbar.Brand>
        </Link>
        <Nav className="search-options">
          {props.search && (
            <Form inline className="my-form-container">
              <FormControl
                type="text"
                placeholder="Search Subjects"
                className="my-search"
              />
              <SearchIcon className="my-search-icon" />
            </Form>
          )}

          {props.filter && (
            <>
              <FilterListIcon color="primary" className="my-filter" />
              <p>Filter</p>
            </>
          )}
        </Nav>

        <Nav className="user-options">
          {props.events && (
            <Link className="events" to="/events">
              <EventIcon />
              <p>Events</p>
            </Link>
          )}

          {props.leaderboard && (
            <Link className="leaderboard" to="/leaderboard">
              <LeaderBoardIcon />
              <p>Leaderboard</p>
            </Link>
          )}

          {props.user && (
            <div className="user">
              <PersonSharpIcon />
              <NavDropdown title="Username" id="basic-nav-dropdown">
                <Link className="dropdown-item" to="/dashboard">
                  <DashboardIcon fontSize="inherit" />
                  <p>Dashboard</p>
                </Link>
                <NavDropdown.Divider />
                <Link className="dropdown-item" to="/">
                  <LogoutIcon fontSize="inherit" />
                  <p>Logout</p>
                </Link>
              </NavDropdown>
            </div>
          )}
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;
