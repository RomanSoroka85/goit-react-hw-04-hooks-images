import React, { useState } from "react";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Modal from "./Components/Modal/Modal";
const App = () => {
  const [ showModal, setShowModal ] = useState(false);

const toggleModal = () => {
    setShowModal((state) => ({ showModal: !showModal }));
  };

  return (
    <>
        <ImageGallery />

        <div>
          {showModal && (
            <Modal onClose={toggleModal}>
              <h2>modal title</h2>

              <button type="button" onClick={toggleModal}>
                close modal
              </button>
            </Modal>
          )}
        </div>
      </>
  );
}

export default App;

