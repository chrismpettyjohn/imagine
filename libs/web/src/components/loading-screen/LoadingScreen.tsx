import React from 'react';

export function LoadingScreen() {
  return (
    <div style={{position: 'absolute', top: 0, left: 0, background: '#5F8A96', width: '100%', height: '100%', textAlign: 'center'}}>
      <div style={{marginTop: '10%'}}>
        <img className="fa-spin" src="https://camo.githubusercontent.com/7909de4bd538e7620f81c3b66c9edd89b8147d99fe07d2c021eb71dfdcb5aa32/68747470733a2f2f692e696d6775722e636f6d2f7a3456685870572e706e67" />
      </div>
    </div>
  )
}
