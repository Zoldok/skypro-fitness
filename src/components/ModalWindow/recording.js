import React, { useEffect, useRef, useState } from 'react';
import * as S from './recording.style'

const ModalComponent = ({ onClose }) => {
  const modalRef = useRef(null);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <S.ModalWindow>
      <S.ModalWindowContent ref={modalRef}>
        <S.ModelMessage>Оставьте нам свой номер и мы обязательно<br /> свяжемся с вами</S.ModelMessage>
        <S.ModalInput
            type="text"
            name="name"
            placeholder="Имя"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <S.ModalInput
            type="tel"
            name="phone"
            placeholder="Номер телефона"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <S.ForModalButton>
          <S.ModalButton type="submit">Отправить</S.ModalButton>
          </S.ForModalButton>

      </S.ModalWindowContent>
    </S.ModalWindow>
  );
};

export default ModalComponent;