import React from 'react';
import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';
import styles from '../styles/Layout.module.css';


Modal.setAppElement('#__next');

const PhotoModal = ({ isOpen, onClose, photo }) => {
  // Eğer photo prop'u null ya da undefined ise, varsayılan bir değer atayalım
  const displayPhoto = photo || { src: '', alt: '' };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className={styles.modal}>
      <button onClick={onClose} className={styles.closeBtn}>
        <FiX />
      </button>
      {/* displayPhoto ile güvenli bir şekilde fotoğrafı gösterelim */}
      <img src={displayPhoto.src} alt={displayPhoto.alt} />
    </Modal>
  );
};

export default PhotoModal;
