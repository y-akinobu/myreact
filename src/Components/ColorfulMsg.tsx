import React from 'react';

// const msgStyle = {
//   color: 'blue'
// };

const ColorfulMsg = (props: { color: any, children: any; }) => {
  return <p style={{ color: props.color }}>{props.children}</p>;
};

export default ColorfulMsg;
