import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'; // Стили для модального окна

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <img src='/images/x.svg' />
        </button>
        <div>
          {children}

        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;