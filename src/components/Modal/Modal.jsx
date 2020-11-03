import React from "react";
import "./Modal.css";
import Buttons from "../Buttons/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({
  getNewDate,
  getNewDescription,
  cancelEdit,
  confirmEdit,
  currentDate,
  currentDescription,
}) => {
  return (
    <div className="modal">
      <div className="content">
        <h1 className="title">Edit Task</h1>
        <div className="inputsModal">
          <label>Date</label>
          <input
            className="date"
            type="date"
            name="date"
            value={currentDate}
            onChange={getNewDate}
          />
          <label>Description</label>
          <input
            className="description"
            type="text"
            name="description"
            value={currentDescription}
            onChange={getNewDescription}
          />
        </div>
        <div className="buttonsModal">
          <Buttons
            buttonClass="btn-primary"
            buttonText={<FontAwesomeIcon icon="check" />}
            tooltipText="Confirm"
            buttonClick={confirmEdit}
          />
          <Buttons
            buttonClass="btn-primary"
            buttonText={<FontAwesomeIcon icon="times" />}
            tooltipText="Cancel"
            buttonClick={cancelEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
