import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContextHook } from "../context";

export const Home = () => {
  const { openSidebar, openModal } = useGlobalContextHook();

  return (
    <main className="d-flex flex-column">
      <button className="menu-btn btn text-primary fs-3" onClick={openSidebar}>
        <FaBars />
      </button>
      <button
        className="modal-btn btn btn-dark w-25 m-auto align-middle"
        onClick={openModal}
      >
        Show Modal
      </button>
    </main>
  );
};
