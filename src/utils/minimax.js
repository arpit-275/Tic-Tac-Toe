import { SCORES } from './constants';
import { switchPlayer } from './helper';

export const minimax = (board, player) => {
  const mult = SCORES[String(player)];
  let thisScore;
  let maxScore = -Infinity;
  let bestMove = null;

  if (board.getWinner() !== null) {
    return [SCORES[board.getWinner()], 0];
  } else {
    for (const empty of board.getEmptySquares()) {
      const copy = board.clone();
      copy.makeMove(empty, player);
      thisScore = mult * minimax(copy, switchPlayer(player))[0];

      if (thisScore >= maxScore) {
        maxScore = thisScore;
        bestMove = empty;
      }
    }

    return [mult * maxScore, bestMove];
  }
};
