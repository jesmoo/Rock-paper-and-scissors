import React from 'react';
import useInitialState from '../Hooks/useInitialState';

const ComputerGame = ({ idComputer }) => {
  const initialState = useInitialState();
  return (
    <>
      {initialState &&
        initialState.map((item) =>
          item.id === idComputer ? (
            <div
              className={`gameChose__item border-${item.classAlt}`}
              key={item.id}
            >
              <img
                src={item.url}
                alt={item.classAlt}
                className={`gameChose__item-Icon`}
              />
            </div>
          ) : null
        )}
    </>
  );
};

export default ComputerGame;
