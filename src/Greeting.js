import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHelloDispatcher } from './redux/greet';

const HelloWorld = () => {
  const dispatch = useDispatch();

  const greeting = useSelector((state) => state.helloReducer.greeting || '');

  const handleClick = () => {
    dispatch(getHelloDispatcher());
  };

  return (
    <>
      <h1>
        {greeting}
      </h1>
      <button type="submit" onClick={handleClick}>
        new greeting
      </button>
    </>
  );
};

export default HelloWorld;
