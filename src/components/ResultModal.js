import React from 'react';
import { StyledModal, ModalWrapper, ModalTitle, ModalContent, ModalFooter, Button } from './styles';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0, 0.6)',
  },
};

export default function ResultModal({ isOpen, close, startNewGame, winner }) {
  return (
    <StyledModal isOpen={isOpen} onRequestClose={close} style={customStyles} ariaHideApp={false}>
      <ModalWrapper>
        <ModalTitle>Game over</ModalTitle>
        <ModalContent>{winner}</ModalContent>
        <ModalFooter>
          <Button onClick={close}>Close</Button>
          <Button onClick={startNewGame}>Start over</Button>
        </ModalFooter>
      </ModalWrapper>
    </StyledModal>
  );
}
