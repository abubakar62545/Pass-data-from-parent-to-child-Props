import React from 'react';
import Child from './Child';
const Parent = () => {
const   greetFunction = ()=> alert('i am parent class function')
  return (
    <>
       <Child func={greetFunction} />
    </>
  );
}

export default Parent;
