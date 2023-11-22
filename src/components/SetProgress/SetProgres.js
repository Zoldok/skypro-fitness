import { useEffect, useRef } from 'react';
import * as S from './SetProgressStyle'

export default function SetProgress({ onClose }) {
  const modalRef = useRef(null);

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
    <S.Wrapper>
      <S.Content  ref={modalRef} >
        <S.TitleSetProgress>Ваш прогресс засчитан!</S.TitleSetProgress>
        <S.SetImage src="././img/SetProgress.png" alt="progress" />
      </S.Content>
    </S.Wrapper>
  )
}
