import React from "react";
import { BaseNavbar } from "..";
import Nav from "../BaseNavbar/Nav";

function Layout(props) {
    return (
        <div>
            <BaseNavbar />
            <div class="main-container sidebar-closed sbar-open" id="container">
                <div class="overlay"></div>
                <div class="cs-overlay"></div>
                <div class="search-overlay"></div>
                <Nav/>
                <div id="content" class="main-content">
                    <div class="layout-px-spacing">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
