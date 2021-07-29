import React from "react";
import ReactModal from "react-modal";

function Modal({ isOpen, onClose, children }) {
  const styles = {
    content: {
      height: "fit-content",
      maxHeight: "calc(100vh - 40px)",
      padding: "0px",
    },

    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={styles}>
      {children}
    </ReactModal>
  );
}

export default Modal;
