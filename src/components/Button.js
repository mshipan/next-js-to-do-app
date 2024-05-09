"use client";

import { useState } from "react";
import CreateTaskModal from "./CreateTaskModal";

const Button = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button className="btn btn-success self-end" onClick={openModal}>
        Create Task
      </button>
      {isModalOpen && (
        <CreateTaskModal isModalOpen={isModalOpen} onClose={closeModal} />
      )}
    </>
  );
};

export default Button;
