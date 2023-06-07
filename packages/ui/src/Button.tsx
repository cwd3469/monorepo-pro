import React from 'react';

export const Button = (props: { text?: string }) => {
  const { text } = props;
  const anm: any = '';
  function showAlert() {
    alert(text);
  }
  return <button onClick={showAlert}>{text}</button>;
};
