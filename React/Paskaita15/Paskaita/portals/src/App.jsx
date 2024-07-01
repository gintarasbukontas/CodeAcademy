import { useState } from "react";
import "./App.css";
import ConfirmModal from "./components/ConfirmModal/ConfirmModal";
import Modal from "./components/Modal/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleConfirm() {
    setIsModalOpen(false);
    console.log("Confirmed");
  }

  function handleCancel() {
    setIsModalOpen(false);
    console.log("Cancelled");
  }

  function handleOpenSecondModal() {
    setIsSecondModalOpen(true);
  }

  function handleSecondModalClose() {
    setIsSecondModalOpen(false);
  }

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <button onClick={handleOpenSecondModal}>Second Modal Open</button>
      {isModalOpen && (
        <ConfirmModal
          text="Are you sure?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
      <Modal open={isSecondModalOpen} handleClose={handleSecondModalClose}>
        <h1>Some text</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure magni
          perferendis aperiam vitae accusamus fuga atque autem? Est, sequi quod!
        </p>
      </Modal>
    </div>
  );
}

export default App;
