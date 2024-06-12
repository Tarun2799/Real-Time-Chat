import React from 'react';
import "./userInfo.css";

const Userinfo = () => {
  return (
    <div className='userInfo'>
        <div className="user">
            <img src="./avatar.png" alt=""  />
            <h2>Tarun Jhamb</h2>
        </div>
        <div className="icons">
            <img src="./more.png" />
            <img src="./video.png" />
            <img src="./edit.png" />
        </div>
    </div>
  )
}

export default Userinfo