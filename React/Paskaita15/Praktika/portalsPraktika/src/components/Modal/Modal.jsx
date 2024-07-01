import ReactDom from "react-dom";
import styles from "./Modal.module.css";
import { useEffect, useState } from "react";

export default function Modal({ isOpen, onClose, children }) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  function handleOverlayClick() {
    setIsModalOpen(false);
    onClose();
  }

  function handleContentClick(e) {
    e.stopPropagation();
  }

  if (!isModalOpen) {
    return undefined;
  }

  return ReactDom.createPortal(
    <div onClick={handleOverlayClick} className={styles.overlay}>
      <div onClick={handleContentClick} className={styles.content}>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
