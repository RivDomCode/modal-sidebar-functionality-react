import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContextHook } from "../context";

export const Modal = () => {
  const { closeModal, isModalActive } = useGlobalContextHook();

  return (
    <div
      className={`${
        isModalActive ? "show-modal modal-overlay" : "modal-overlay"
      } `}
    >
      <div className="modal-container">
        <h2>Esto es el modal</h2>
        <button className="btn close-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
