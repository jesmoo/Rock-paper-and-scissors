import { useState, useEffect } from 'react';
import imgRock from '../assets/game/icon-rock.svg';
import imgPaper from '../assets/game/icon-paper.svg';
import imgScissor from '../assets/game/icon-scissors.svg';

const useInitialState = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([
      {
        id: 1,
        classAlt: 'rock',
        url: imgRock,
        win: 3,
        lose: 2,
      },
      {
        id: 2,
        classAlt: 'paper',
        url: imgPaper,
        win: 1,
        lose: 3,
      },
      {
        id: 3,
        classAlt: 'scissor',
        url: imgScissor,
        win: 2,
        lose: 1,
      },
    ]);
  }, []);
  return data;
};
export default useInitialState;
