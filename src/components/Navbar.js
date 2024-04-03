/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logoHTA.png";
import { NavLink } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import io from "socket.io-client";

function Navbar({ socket }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [image, setImage] = useState(null);
  // const [notifications, setNotifications] = useState([]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchData = () => {
      let { user, role, image } = localStorage.getItem("auth")
        ? JSON.parse(localStorage.getItem("auth"))
        : {};

      setUser(user);
      setRole(role);
      setImage(image);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   // Menghubungkan ke server WebSocket
  //   const socket = io('http://localhost:3000');
  //   console.log("Test", socket)

  //   // Mendengarkan event 'notification' dari server dan memperbarui state notifikasi
  //   socket.on('notification', (notification) => {
  //     setNotifications([...notifications, notification]);
  //   });

  //   // Membersihkan event listener saat komponen unmount
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [notifications]);

  return (
    <section>
      <nav
        className="navbar pe-5 ps-3 navbar-expand-lg py-40"
        style={{ backgroundColor: "#F9FAFF" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} width="60" height="60" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto text-lg gap-lg-0 gap-2">
              <NavLink
                to="/dashboard"
                exact
                className="nav-item nav-link my-auto"
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink
                to="/history-wo"
                className="nav-item nav-link my-auto"
                activeClassName="active"
              >
                History
              </NavLink>
              <NavLink
                to="/blog"
                className="nav-item nav-link my-auto"
                activeClassName="active"
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact-us"
                className="nav-item nav-link my-auto"
                activeClassName="active"
              >
                Support
              </NavLink>
            </ul>
            <ul className="navbar-nav text-lg">
              <div class="notification dropdown">
                <button
                  class="icon btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "none" }}
                >
                  <NotificationsIcon
                    className="me-3"
                    boxSize={["30px", "40px"]}
                  />
                  {/* {notifications.length > 0 && (
                    <span className="badge bg-danger">
                      {notifications.length}
                    </span>
                  )} */}
                </button>
                <ul class="dropdown-menu">
                  {/* {notifications.map((notification, index) => (
                    <li key={index}>
                      <a className="dropdown-item" href="#">
                        {notification}
                      </a>
                    </li>
                  ))} */}
                </ul>
              </div>
              <div className="vertical-line d-lg-block d-none"></div>
              <li className="nav-item my-auto dropdown d-flex">
                <p className="text-lg nav-item text-black color-palette-1 ms-3 my-auto">
                  {role}, {user}
                </p>
                <div>
                  <a
                    className="dropdown-toggle ms-3"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={`http://localhost:5000/${image}`}
                      className="rounded-circle"
                      width="40"
                      height="40"
                      alt=""
                    />
                  </a>

                  <ul
                    className="dropdown-menu border-0"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a
                        className="dropdown-item text-lg color-palette-2"
                        href="#"
                      >
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-lg color-palette-2"
                        href="/list-wo"
                      >
                        List Approve
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-lg color-palette-2"
                        href="#"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-lg color-palette-2"
                        href="#"
                        onClick={() => handleLogout()}
                      >
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
