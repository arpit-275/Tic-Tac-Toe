import styled from 'styled-components';
import Modal from 'react-modal';
import { border } from '../utils/borderStyles';
import { SQUARE_DIMS } from '../utils/constants';

/** App.js styled components */

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 0 0 auto;
`;

export const FooterInner = styled.div`
  padding: 16px 0;
`;

/** TicTacToe.js styled components */

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: ${({ dims }) => `${dims * (SQUARE_DIMS + 5)}px`};
  flex-flow: wrap;
  position: relative;
`;

export const Square = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${SQUARE_DIMS}px;
  height: ${SQUARE_DIMS}px;
  ${border};
  &:hover {
    cursor: pointer;
  }
`;

export const Marker = styled.p`
  font-size: 68px;
`;

export const ButtonRow = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
`;

export const Screen = styled.div``;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const ChooseText = styled.p``;

export const Strikethrough = styled.div`
  position: absolute;
  ${({ styles }) => styles}
  background-color: indianred;
  height: 5px;
  width: ${({ styles }) => !styles && '0px'};
`;

/** ResultModal.js styled components */

export const StyledModal = styled(Modal)`
  height: 300px;
  position: relative;
  margin: 0 auto;
  top: 10%;
  right: auto;
  bottom: auto;
  width: 320px;
  outline: none;
  display: flex;
  flex-direction: column;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #fff;
  max-height: 100%;
  height: 100%;
  align-items: center;
  backface-visibility: hidden;
  padding: 1.25rem;
  ${border};
`;

export const ModalTitle = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ModalContent = styled.p`
  flex: 1 1 auto;
  text-align: center;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0 0 auto;
  width: 100%;
`;

export const Button = styled.button`
  font-size: 16px;
`;
