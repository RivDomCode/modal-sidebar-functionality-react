import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContextHook } from "../context";

export const SideBar = () => {
  const { closeSidebar, isSidebarActive } = useGlobalContextHook();

  return (
    <aside
      className={`${isSidebarActive ? "sidebar show-sidebar" : "sidebar"}`}
    >
      <div className="sidebar-header d-flex justify-content-between">
        <h3>header sidebar</h3>
        <button
          className="menu-btn btn text-primary fs-3"
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>{" "}
        <li>
          <a href="">Social</a>
        </li>
      </ul>
    </aside>
  );
};
