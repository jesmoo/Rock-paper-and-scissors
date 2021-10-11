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
      },
      {
        id: 2,
        classAlt: 'paper',
        url: imgPaper,
      },
      {
        id: 3,
        classAlt: 'scissor',
        url: imgScissor,
      },
    ]);
  }, []);
  return data;
};
export default useInitialState;
