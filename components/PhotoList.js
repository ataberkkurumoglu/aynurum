"use client"
import React, { useState } from 'react';
import Photo from './Photo';
import PhotoModal from './PhotoModal';
import styles from '../styles/Layout.module.css';


const PhotoList = ({ photos }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setModalIsOpen(false);
  };

  return (
    <div className={styles.photoList}>
      {photos.map((photo, index) => (
        <Photo
          key={index}
          src={photo.src}
          alt={photo.alt}
          onClick={() => openModal(photo)}
        />
      ))}
      <PhotoModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        photo={selectedPhoto}
      />
    </div>
  );
};

export default PhotoList;
