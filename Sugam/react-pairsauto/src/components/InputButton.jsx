import React from "react";

function InputButton() {
  function handleClick(data) {
    console.log(data);
  }
  return (
    <>
      <button onClick={handleClick}>Console Input</button>
    </>
  );
}

export default InputButton;
