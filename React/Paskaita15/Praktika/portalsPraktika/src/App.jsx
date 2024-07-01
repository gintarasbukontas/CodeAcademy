import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClose() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={handleClose}>
        <h3>Title</h3>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          laudantium ea enim optio repudiandae expedita voluptatum libero,
          debitis accusamus cumque.
        </p>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default App;
