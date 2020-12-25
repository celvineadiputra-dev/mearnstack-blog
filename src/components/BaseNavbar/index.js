import React from "react";

function index() {
    return (
        <div className="header-container fixed-top">
            <header className="header navbar navbar-expand-sm expand-header">
                <a
                    href="javascript:void(0);"
                    className="sidebarCollapse"
                    data-placement="bottom">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-menu">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </a>

                <ul className="navbar-item flex-row ml-auto">
                    <li className="nav-item dropdown user-profile-dropdown  order-lg-0 order-1">
                        <a
                            href="javascript:void(0);"
                            className="nav-link dropdown-toggle user"
                            id="userProfileDropdown"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-user-check">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="8.5" cy="7" r="4"></circle>
                                <polyline points="17 11 19 13 23 9"></polyline>
                            </svg>
                        </a>
                        <div
                            className="dropdown-menu position-absolute e-animated e-fadeInUp"
                            aria-labelledby="userProfileDropdown">
                            <div className="user-profile-section">
                                <div className="media mx-auto">
                                    <img
                                        src="assets/img/90x90.jpg"
                                        className="img-fluid mr-2"
                                        alt="avatar"
                                    />
                                    <div className="media-body">
                                        <h5>Alan Green</h5>
                                        <p>Web Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown-item">
                                <a href="user_profile.html">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-user">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>{" "}
                                    <span>My Profile</span>
                                </a>
                            </div>
                            <div className="dropdown-item">
                                <a href="apps_mailbox.html">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-inbox">
                                        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                                        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                                    </svg>{" "}
                                    <span>My Inbox</span>
                                </a>
                            </div>
                            <div className="dropdown-item">
                                <a href="auth_lockscreen.html">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-lock">
                                        <rect
                                            x="3"
                                            y="11"
                                            width="18"
                                            height="11"
                                            rx="2"
                                            ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>{" "}
                                    <span>Lock Screen</span>
                                </a>
                            </div>
                            <div className="dropdown-item">
                                <a href="auth_login.html">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        class="feather feather-log-out">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                        <polyline points="16 17 21 12 16 7"></polyline>
                                        <line
                                            x1="21"
                                            y1="12"
                                            x2="9"
                                            y2="12"></line>
                                    </svg>{" "}
                                    <span>Log Out</span>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default index;
