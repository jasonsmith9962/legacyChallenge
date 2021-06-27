import React, { Component } from 'react';

const CatList = (props) => {

  return (
    <div>
      {props.cats.map((breeds) => <li>{breeds}</li>)}
    </div>
  )
}

export default CatList;
