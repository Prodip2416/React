import React from 'react';

function MultipleComponents() {
    const numbers =  [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    return (
      <ol>{listItems}</ol>
    );
  }

export default MultipleComponents