import React from 'react';
import TicTacToe from './TicTacToe';
import { Main, Footer, FooterInner } from './styles';
import 'papercss/dist/paper.min.css';

export default function App() {
  return (
    <>
      <Main>
        <TicTacToe />
      </Main>
      <Footer>
        <FooterInner>
          View the code on <a href="https://github.com/arpit-275/tic-tac-toe">Github</a>
        </FooterInner>
      </Footer>
    </>
  );
}
