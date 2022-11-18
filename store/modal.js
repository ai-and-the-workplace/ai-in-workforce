import { createContext, useState } from 'react';

const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState({
    visible: false,
    title: '',
    text: '',
  });

  function openModal(title, text) {
    setModal({
      visible: true,
      title: title,
      text: text,
    });
  }

  function closeModal() {
    setModal({ visible: false, title: '', text: '' });
  }

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
